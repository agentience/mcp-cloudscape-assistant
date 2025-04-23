/**
 * Component metadata for Cloudscape components
 */

interface ComponentProperty {
  name: string;
  type: string;
  description: string;
  defaultValue: any;
  required: boolean;
  acceptedValues: (string | number)[];
  isDeprecated?: boolean;
  examples?: any[];
}

interface Component {
  id: string;
  name: string;
  category: string;
  description: string;
  importPath: string;
  version: string;
  isExperimental: boolean;
  relatedComponents: string[];
  tags: string[];
  properties: Record<string, ComponentProperty>;
  examples: string[];
}

const components: Record<string, Component> = {
  // 1. AppLayout
  "app-layout": {
    id: "app-layout",
    name: "AppLayout",
    category: "layout",
    description: "Provides a standard application layout with navigation, content, and tools panels.",
    importPath: "@cloudscape-design/components/app-layout",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["side-navigation", "breadcrumb-group", "help-panel"],
    tags: ["layout", "navigation", "responsive", "application"],
    properties: {
      navigationWidth: {
        name: "navigationWidth",
        type: "number",
        description: "Width of the navigation drawer in pixels.",
        defaultValue: 280,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      navigation: {
        name: "navigation",
        type: "ReactNode",
        description: "Content of the navigation panel.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      tools: {
        name: "tools",
        type: "ReactNode",
        description: "Content of the tools panel.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      content: {
        name: "content",
        type: "ReactNode",
        description: "Main content of the application.",
        defaultValue: null,
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      toolsHide: {
        name: "toolsHide",
        type: "boolean",
        description: "Determines whether the tools panel is hidden.",
        defaultValue: false,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      contentType: {
        name: "contentType",
        type: "string",
        description: "Determines the content type, which affects the styling.",
        defaultValue: "default",
        required: false,
        acceptedValues: ["default", "form", "table", "wizard"],
        isDeprecated: false,
        examples: []
      }
    },
    examples: ["app-layout-basic", "app-layout-with-navigation"]
  },
  
  // 2. Table
  "table": {
    id: "table",
    name: "Table",
    category: "display",
    description: "Displays tabular data with sorting, filtering, and pagination.",
    importPath: "@cloudscape-design/components/table",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["collection-preferences", "pagination", "text-filter"],
    tags: ["data", "display", "grid", "sorting", "filtering"],
    properties: {
      columnDefinitions: {
        name: "columnDefinitions",
        type: "array",
        description: "Defines the columns of the table.",
        defaultValue: [],
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      items: {
        name: "items",
        type: "array",
        description: "The items to display in the table.",
        defaultValue: [],
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      sortingColumn: {
        name: "sortingColumn",
        type: "object",
        description: "The column currently used for sorting.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      sortingDescending: {
        name: "sortingDescending",
        type: "boolean",
        description: "Determines whether the sorting is in descending order.",
        defaultValue: false,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      selectedItems: {
        name: "selectedItems",
        type: "array",
        description: "The currently selected items.",
        defaultValue: [],
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      }
    },
    examples: ["table-basic", "table-with-sorting"]
  },
  
  // 3. Form
  "form": {
    id: "form",
    name: "Form",
    category: "input",
    description: "A container for form controls with validation.",
    importPath: "@cloudscape-design/components/form",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["form-field", "input", "select", "checkbox"],
    tags: ["input", "form", "validation", "container"],
    properties: {
      header: {
        name: "header",
        type: "ReactNode",
        description: "The header of the form.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      actions: {
        name: "actions",
        type: "ReactNode",
        description: "The actions section of the form, usually containing submit and cancel buttons.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      errorText: {
        name: "errorText",
        type: "string",
        description: "Error text displayed at the top of the form.",
        defaultValue: "",
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      }
    },
    examples: ["form-basic"]
  },
  
  // 4. Button
  "button": {
    id: "button",
    name: "Button",
    category: "input",
    description: "Triggers actions with various styles and sizes.",
    importPath: "@cloudscape-design/components/button",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["space-between", "form"],
    tags: ["input", "action", "control"],
    properties: {
      variant: {
        name: "variant",
        type: "string",
        description: "The visual style of the button.",
        defaultValue: "normal",
        required: false,
        acceptedValues: ["primary", "normal", "link", "icon"],
        isDeprecated: false,
        examples: []
      },
      loading: {
        name: "loading",
        type: "boolean",
        description: "Indicates if the button is in a loading state.",
        defaultValue: false,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      disabled: {
        name: "disabled",
        type: "boolean",
        description: "Indicates if the button is disabled.",
        defaultValue: false,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      onClick: {
        name: "onClick",
        type: "function",
        description: "Function called when the button is clicked.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      }
    },
    examples: ["button-variants"]
  },
  
  // 5. Container
  "container": {
    id: "container",
    name: "Container",
    category: "layout",
    description: "Groups related content with headers and optional actions.",
    importPath: "@cloudscape-design/components/container",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["header", "space-between"],
    tags: ["layout", "container", "grouping"],
    properties: {
      header: {
        name: "header",
        type: "ReactNode",
        description: "The header of the container.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      footer: {
        name: "footer",
        type: "ReactNode",
        description: "The footer of the container.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      disableContentPaddings: {
        name: "disableContentPaddings",
        type: "boolean",
        description: "Removes the default padding from the container content.",
        defaultValue: false,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      }
    },
    examples: ["container-with-header"]
  },
  
  // 6. Header
  "header": {
    id: "header",
    name: "Header",
    category: "display",
    description: "Displays a heading with optional actions.",
    importPath: "@cloudscape-design/components/header",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["container", "space-between"],
    tags: ["display", "heading", "title"],
    properties: {
      actions: {
        name: "actions",
        type: "ReactNode",
        description: "Actions displayed in the header.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      description: {
        name: "description",
        type: "ReactNode",
        description: "Description displayed below the header.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      variant: {
        name: "variant",
        type: "string",
        description: "The visual style of the header.",
        defaultValue: "h2",
        required: false,
        acceptedValues: ["h1", "h2", "h3", "awsui-h1-sticky"],
        isDeprecated: false,
        examples: []
      }
    },
    examples: []
  },
  
  // 7. SpaceBetween
  "space-between": {
    id: "space-between",
    name: "SpaceBetween",
    category: "layout",
    description: "Adds equal spacing between children.",
    importPath: "@cloudscape-design/components/space-between",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["grid", "container"],
    tags: ["layout", "spacing", "alignment"],
    properties: {
      size: {
        name: "size",
        type: "string",
        description: "The size of the spacing between children.",
        defaultValue: "m",
        required: false,
        acceptedValues: ["xxxs", "xxs", "xs", "s", "m", "l", "xl", "xxl"],
        isDeprecated: false,
        examples: []
      },
      direction: {
        name: "direction",
        type: "string",
        description: "The direction of the spacing.",
        defaultValue: "vertical",
        required: false,
        acceptedValues: ["horizontal", "vertical"],
        isDeprecated: false,
        examples: []
      }
    },
    examples: []
  },
  
  // 8. Grid
  "grid": {
    id: "grid",
    name: "Grid",
    category: "layout",
    description: "A responsive layout grid system.",
    importPath: "@cloudscape-design/components/grid",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["space-between", "container"],
    tags: ["layout", "grid", "responsive"],
    properties: {
      gridDefinition: {
        name: "gridDefinition",
        type: "array",
        description: "Defines the grid columns.",
        defaultValue: [],
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      disableGutters: {
        name: "disableGutters",
        type: "boolean",
        description: "Removes the default gutters between grid columns.",
        defaultValue: false,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      }
    },
    examples: []
  },
  
  // 9. Cards
  "cards": {
    id: "cards",
    name: "Cards",
    category: "display",
    description: "Displays content in card format.",
    importPath: "@cloudscape-design/components/cards",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["collection-preferences", "pagination", "text-filter"],
    tags: ["display", "data", "cards", "grid"],
    properties: {
      cardDefinition: {
        name: "cardDefinition",
        type: "object",
        description: "Defines the structure of the cards.",
        defaultValue: {},
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      items: {
        name: "items",
        type: "array",
        description: "The items to display as cards.",
        defaultValue: [],
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      selectedItems: {
        name: "selectedItems",
        type: "array",
        description: "The currently selected items.",
        defaultValue: [],
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      cardsPerRow: {
        name: "cardsPerRow",
        type: "object",
        description: "The number of cards per row at different breakpoints.",
        defaultValue: { default: 1, xs: 1, s: 2, m: 3, l: 4, xl: 5 },
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      }
    },
    examples: []
  },
  
  // 10. Alert
  "alert": {
    id: "alert",
    name: "Alert",
    category: "display",
    description: "Displays messages with different severity levels.",
    importPath: "@cloudscape-design/components/alert",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["container", "form"],
    tags: ["display", "message", "notification", "status"],
    properties: {
      type: {
        name: "type",
        type: "string",
        description: "The type of the alert, which affects its color and icon.",
        defaultValue: "info",
        required: false,
        acceptedValues: ["success", "warning", "error", "info"],
        isDeprecated: false,
        examples: []
      },
      header: {
        name: "header",
        type: "ReactNode",
        description: "The header of the alert.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      dismissible: {
        name: "dismissible",
        type: "boolean",
        description: "Whether the alert can be dismissed.",
        defaultValue: false,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      onDismiss: {
        name: "onDismiss",
        type: "function",
        description: "Function called when the alert is dismissed.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      }
    },
    examples: []
  },
  
  // 11. Tabs
  "tabs": {
    id: "tabs",
    name: "Tabs",
    category: "navigation",
    description: "Organizes content into multiple tabs.",
    importPath: "@cloudscape-design/components/tabs",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["container", "header"],
    tags: ["navigation", "tabs", "content"],
    properties: {
      tabs: {
        name: "tabs",
        type: "array",
        description: "The tabs to display.",
        defaultValue: [],
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      activeTabId: {
        name: "activeTabId",
        type: "string",
        description: "The ID of the active tab.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      onChange: {
        name: "onChange",
        type: "function",
        description: "Function called when a tab is selected.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      variant: {
        name: "variant",
        type: "string",
        description: "The visual style of the tabs.",
        defaultValue: "default",
        required: false,
        acceptedValues: ["default", "container"],
        isDeprecated: false,
        examples: []
      }
    },
    examples: []
  },
  
  // 12. Modal
  "modal": {
    id: "modal",
    name: "Modal",
    category: "display",
    description: "Displays content in a layer above the page.",
    importPath: "@cloudscape-design/components/modal",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["container", "header", "button"],
    tags: ["display", "dialog", "overlay"],
    properties: {
      visible: {
        name: "visible",
        type: "boolean",
        description: "Whether the modal is visible.",
        defaultValue: false,
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      header: {
        name: "header",
        type: "ReactNode",
        description: "The header of the modal.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      footer: {
        name: "footer",
        type: "ReactNode",
        description: "The footer of the modal.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      onDismiss: {
        name: "onDismiss",
        type: "function",
        description: "Function called when the modal is dismissed.",
        defaultValue: null,
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      size: {
        name: "size",
        type: "string",
        description: "The size of the modal.",
        defaultValue: "medium",
        required: false,
        acceptedValues: ["small", "medium", "large", "max"],
        isDeprecated: false,
        examples: []
      }
    },
    examples: []
  },
  
  // 13. Select
  "select": {
    id: "select",
    name: "Select",
    category: "input",
    description: "Allows users to select an option from a dropdown list.",
    importPath: "@cloudscape-design/components/select",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["form-field", "input", "multiselect"],
    tags: ["input", "selection", "dropdown"],
    properties: {
      options: {
        name: "options",
        type: "array",
        description: "The options to display in the dropdown.",
        defaultValue: [],
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      selectedOption: {
        name: "selectedOption",
        type: "object",
        description: "The currently selected option.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      onChange: {
        name: "onChange",
        type: "function",
        description: "Function called when the selection changes.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      placeholder: {
        name: "placeholder",
        type: "string",
        description: "Placeholder text to display when no option is selected.",
        defaultValue: "",
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      disabled: {
        name: "disabled",
        type: "boolean",
        description: "Whether the select is disabled.",
        defaultValue: false,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      }
    },
    examples: []
  },
  
  // 14. Input
  "input": {
    id: "input",
    name: "Input",
    category: "input",
    description: "Allows users to enter text.",
    importPath: "@cloudscape-design/components/input",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["form-field", "select", "textarea"],
    tags: ["input", "text", "form"],
    properties: {
      value: {
        name: "value",
        type: "string",
        description: "The current value of the input.",
        defaultValue: "",
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      onChange: {
        name: "onChange",
        type: "function",
        description: "Function called when the input value changes.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      placeholder: {
        name: "placeholder",
        type: "string",
        description: "Placeholder text to display when the input is empty.",
        defaultValue: "",
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      disabled: {
        name: "disabled",
        type: "boolean",
        description: "Whether the input is disabled.",
        defaultValue: false,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      type: {
        name: "type",
        type: "string",
        description: "The type of the input.",
        defaultValue: "text",
        required: false,
        acceptedValues: ["text", "password", "search", "number", "email", "url", "tel"],
        isDeprecated: false,
        examples: []
      }
    },
    examples: []
  },
  
  // 15. Pagination
  "pagination": {
    id: "pagination",
    name: "Pagination",
    category: "navigation",
    description: "Allows users to navigate through pages of content.",
    importPath: "@cloudscape-design/components/pagination",
    version: "3.0.0",
    isExperimental: false,
    relatedComponents: ["table", "cards", "collection-preferences"],
    tags: ["navigation", "pagination", "pages"],
    properties: {
      currentPageIndex: {
        name: "currentPageIndex",
        type: "number",
        description: "The index of the current page (1-based).",
        defaultValue: 1,
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      pagesCount: {
        name: "pagesCount",
        type: "number",
        description: "The total number of pages.",
        defaultValue: 1,
        required: true,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      onNextPageClick: {
        name: "onNextPageClick",
        type: "function",
        description: "Function called when the next page button is clicked.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      onPreviousPageClick: {
        name: "onPreviousPageClick",
        type: "function",
        description: "Function called when the previous page button is clicked.",
        defaultValue: null,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      },
      disabled: {
        name: "disabled",
        type: "boolean",
        description: "Whether the pagination is disabled.",
        defaultValue: false,
        required: false,
        acceptedValues: [],
        isDeprecated: false,
        examples: []
      }
    },
    examples: []
  }
};

export default components;