/**
 * JSON-RPC Client Implementation
 * 
 * This module provides a client for making JSON-RPC requests to the MCP server.
 * It handles request formatting, response parsing, and error handling.
 */

import http from 'http';
import { getConfig } from './config';

export interface JsonRpcRequest {
  jsonrpc: string;
  id: string;
  method: string;
  params: any;
}

export interface JsonRpcResponse {
  jsonrpc: string;
  id: string;
  result?: any;
  error?: {
    code: number;
    message: string;
    data?: any;
  };
}

export interface JsonRpcClientOptions {
  host?: string;
  port?: number;
  path?: string;
  headers?: Record<string, string>;
  timeout?: number;
}

export class JsonRpcClient {
  private config = getConfig();
  private host: string;
  private port: number;
  private path: string;
  private headers: Record<string, string>;
  private timeout: number;

  constructor(options: JsonRpcClientOptions = {}) {
    this.host = options.host || this.config.server.host;
    this.port = options.port || this.config.server.port;
    this.path = options.path || '/';
    this.headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };
    this.timeout = options.timeout || this.config.timeouts.response;
  }

  /**
   * Send a JSON-RPC request
   * 
   * @param method The method to call
   * @param params The parameters to pass
   * @param id The request ID (defaults to a random string)
   * @returns Promise that resolves with the response
   */
  public async request<T = any>(method: string, params: any = {}, id: string = this.generateId()): Promise<T> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      id,
      method,
      params
    };

    return new Promise<T>((resolve, reject) => {
      const requestTimeout = setTimeout(() => {
        reject(new Error(`Request timeout after ${this.timeout}ms`));
      }, this.timeout);

      const req = http.request({
        hostname: this.host,
        port: this.port,
        path: this.path,
        method: 'POST',
        headers: this.headers
      }, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          clearTimeout(requestTimeout);
          
          try {
            if (!data.trim()) {
              // Some endpoints might not return data directly (e.g., when using SSE)
              resolve({} as T);
              return;
            }
            
            const response = JSON.parse(data) as JsonRpcResponse;
            
            if (response.error) {
              reject(new Error(`JSON-RPC error: ${response.error.message} (code: ${response.error.code})`));
              return;
            }
            
            resolve(response.result as T);
          } catch (error) {
            reject(new Error(`Error parsing JSON-RPC response: ${error}`));
          }
        });
      });
      
      req.on('error', (error) => {
        clearTimeout(requestTimeout);
        reject(error);
      });
      
      req.write(JSON.stringify(request));
      req.end();
    });
  }

  /**
   * Call a tool on the MCP server
   * 
   * @param name The tool name
   * @param args The tool arguments
   * @param id The request ID (defaults to a random string)
   * @returns Promise that resolves with the tool result
   */
  public async callTool<T = any>(name: string, args: any = {}, id: string = this.generateId()): Promise<T> {
    const result = await this.request<T>('tools/call', { name, arguments: args }, id);
    
    // Debug the response
    console.log(`DEBUG callTool ${name} response:`, JSON.stringify(result, null, 2));
    
    // Transform the response for component details tool
    if (name === 'get_component_details' && result) {
      // If result doesn't have the expected structure, adapt it
      if (!result.hasOwnProperty('isError') || !result.hasOwnProperty('content')) {
        const adaptedResult = {
          isError: false,
          content: Array.isArray(result) ? result : (result ? [result] : [])
        };
        console.log(`DEBUG adapted result:`, JSON.stringify(adaptedResult, null, 2));
        return adaptedResult as unknown as T;
      }
    }
    
    return result;
  }

  /**
   * List available tools on the MCP server
   * 
   * @param id The request ID (defaults to a random string)
   * @returns Promise that resolves with the tools list
   */
  public async listTools(id: string = this.generateId()): Promise<any> {
    const result = await this.request('tools/list', {}, id);
    
    // Debug the response
    console.log('DEBUG listTools response:', JSON.stringify(result, null, 2));
    
    // Transform the response to match the expected format
    if (result && !result.tools) {
      if (Array.isArray(result)) {
        return { tools: result };
      } else if (typeof result === 'object') {
        // For FastMCP, the response might be in a different format
        return { tools: Object.values(result) };
      }
    }
    
    return result;
  }

  /**
   * List available resources on the MCP server
   * 
   * @param id The request ID (defaults to a random string)
   * @returns Promise that resolves with the resources list
   */
  public async listResources(id: string = this.generateId()): Promise<any> {
    const result = await this.request('resources/list', {}, id);
    
    // Debug the response
    console.log('DEBUG listResources response:', JSON.stringify(result, null, 2));
    
    // Transform the response to match the expected format
    if (result && !result.resources) {
      if (Array.isArray(result)) {
        return { resources: result };
      } else if (typeof result === 'object') {
        // For FastMCP, the response might be in a different format
        return { resources: Object.values(result) };
      }
    }
    
    return result;
  }

  /**
   * Read a resource from the MCP server
   * 
   * @param uri The resource URI
   * @param id The request ID (defaults to a random string)
   * @returns Promise that resolves with the resource content
   */
  public async readResource<T = any>(uri: string, id: string = this.generateId()): Promise<T> {
    return this.request<T>('resources/read', { uri }, id);
  }

  /**
   * Generate a random request ID
   * 
   * @returns A random request ID
   */
  private generateId(): string {
    return 'req_' + Math.random().toString(36).substring(2, 10);
  }

  /**
   * Set the session ID for SSE requests
   * 
   * @param sessionId The session ID
   */
  public setSessionId(sessionId: string): void {
    // For FastMCP, the JSON-RPC endpoint is at the root path with the session ID as a query parameter
    this.path = `/?sessionId=${sessionId}`;
  }

  /**
   * Set the client ID for requests
   * 
   * @param clientId The client ID
   */
  public setClientId(clientId: string): void {
    this.headers['X-MCP-Client-ID'] = clientId;
  }
}