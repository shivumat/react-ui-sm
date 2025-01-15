import { ReactElement } from "react";
import ButtonContent from "./Content/ButtonContent";
import DropdownContent from "./Content/DropdownContent";
import HomeContent from "./Content/HomeContent";
import InputContent from "./Content/InputContent";

export enum MixinsTab {
    PADDING = 'Padding',
    MARGIN = 'Margin',
    TYPOGRAPHY = 'Typography',
    COLOR = 'Color',
    BORDER = 'Border',
    SHADOW = 'Shadow',
}

export interface RouteConfig {
    path: string;
    component?: ReactElement;
    label: string;
    content?:string;
    children?: RouteConfig[];
}

export const routesConfig : RouteConfig[] = [
  {
    label: "Home",
    path: "/",
    content: "Comprehensive input components to collect and validate user data.",
    component: <HomeContent />,
  },
  {
    label: "Data Display Components",
    path: "/data-display",
    content: "Components focused on presenting and organizing data in intuitive and visually appealing ways.",
    children: [
      {
        label: "Table",
        path: "/data-display-table",
        content: "A powerful grid-based component for tabular data representation. Features: Sorting, filtering, and pagination support.",
      },
      {
        label: "Card",
        path: "/data-display-card",
        content: "A container for structured content with customizable layouts. Features: Header, footer, and flexible content sections.",
      },
      {
        label: "List",
        path: "/data-display-list",
        content: "Display items in vertical or horizontal layouts. Features: Supports infinite scrolling and virtualized lists.",
      },
      {
        label: "Tree View",
        path: "/data-display-tree-view",
        content: "Hierarchical data visualization with expandable/collapsible nodes. Features: Drag-and-drop support and custom icons.",
      },
      {
        label: "Tooltip",
        path: "/data-display-tooltip",
        content: "Display additional information on hover or focus. Features: Custom placement and animations.",
      },
      {
        label: "Popover",
        path: "/data-display-popover",
        content: "A contextual overlay component for additional interactions. Features: Configurable triggers and animations.",
      },
      {
        label: "Avatar Group",
        path: "/data-display-avatar-group",
        content: "Display user avatars in groups with overflow handling.",
      },
    ],
  },
  {
    label: "Form Components",
    path: "/form-components",
    content: "Comprehensive input components to collect and validate user data.",
    children: [
      {
        label: "Input Fields",
        path: "/form-components-input-fields",
        content: "Text, password, and number inputs with validation.",
        component: <InputContent />,
      },
      {
        label: "Dropdowns",
        path: "/form-components-dropdowns",
        content: "Customizable dropdown menus with search and multi-select options.",
        component: <DropdownContent />,
      },
      {
        label: "Date Picker",
        path: "/form-components-date-picker",
        content: "A calendar-based input for selecting dates.",
      },
      {
        label: "Time Picker",
        path: "/form-components-time-picker",
        content: "Input for selecting times with customizable intervals.",
      },
      {
        label: "Toggle Switch",
        path: "/form-components-toggle-switch",
        content: "Binary toggle buttons with visual feedback.",
      },
      {
        label: "Checkbox and Radio Buttons",
        path: "/form-components-checkbox-radio",
        content: "Grouped or standalone selection inputs.",
      },
      {
        label: "Slider",
        path: "/form-components-slider",
        content: "Range selectors with custom styling.",
      },
      {
        label: "File Uploader",
        path: "/form-components-file-uploader",
        content: "Drag-and-drop file upload with preview support.",
      },
      {
        label: "Rich Text Editor",
        path: "/form-components-rich-text-editor",
        content: "A WYSIWYG editor for content creation.",
      },
      {
        label: "Color Picker",
        path: "/form-components-color-picker",
        content: "Custom palettes for color selection.",
      },
      {
        label: "Range Picker",
        path: "/form-components-range-picker",
        content: "Select a range of values or dates.",
      },
      {
        label: "Rating",
        path: "/form-components-rating",
        content: "Star-based or emoji-based rating inputs.",
      },
      {
        label: "Tag Input",
        path: "/form-components-tag-input",
        content: "Add and manage tags dynamically.",
      },
      {
        label: "Calendar",
        path: "/form-components-calendar",
        content: "A full-sized interactive calendar.",
      },
      {
        label: "Form Validation",
        path: "/form-components-form-validation",
        content: "Real-time and server-side validation support.",
      },
      {
        label: "Autocomplete",
        path: "/form-components-autocomplete",
        content: "Predictive text inputs with suggestion lists.",
      },
    ],
  },
  {
    label: "Interaction Components",
    path: "/interaction-components",
    content: "Interactive elements designed to enhance user engagement.",
    children: [
      {
        label: "Button",
        path: "/interaction-components-button",
        content: "Primary, secondary, and tertiary buttons with various styles.",
        component: <ButtonContent />,
      },
      {
        label: "Badge",
        path: "/interaction-components-badge",
        content: "Indicators for notifications or statuses.",
      },
      {
        label: "Stepper",
        path: "/interaction-components-stepper",
        content: "Multi-step progress indicators.",
      },
      {
        label: "Drag-and-Drop",
        path: "/interaction-components-drag-drop",
        content: "Rearrange items via drag-and-drop.",
      },
      {
        label: "Accordion",
        path: "/interaction-components-accordion",
        content: "Expandable/collapsible sections for FAQs and content.",
      },
    ],
  },
  {
    label: "Navigation Components",
    path: "/navigation-components",
    content: "Guide users through applications with intuitive navigation elements.",
    children: [
      {
        label: "Navbar",
        path: "/navigation-components-navbar",
        content: "Responsive navigation bars with dropdown support.",
      },
      {
        label: "Sidebar",
        path: "/navigation-components-sidebar",
        content: "Persistent or collapsible side navigation.",
      },
      {
        label: "Breadcrumb",
        path: "/navigation-components-breadcrumb",
        content: "Hierarchical path indicators.",
      },
      {
        label: "Tabs",
        path: "/navigation-components-tabs",
        content: "Tabbed interfaces for switching views.",
      },
      {
        label: "Pagination",
        path: "/navigation-components-pagination",
        content: "Navigate large datasets with page numbers.",
      },
      {
        label: "Menu",
        path: "/navigation-components-menu",
        content: "Contextual or dropdown menus with custom styles.",
      },
    ],
  },
];
   

export const flattenedRoutes = (): RouteConfig[] => {
  const paths: RouteConfig[] = [];

  const traverse = (routeList: RouteConfig[]) => {
      for (const route of routeList) {
          paths.push(route);
          if (route.children) {
              traverse(route.children); // Recursively handle children
          }
      }
  };

  traverse(routesConfig);
  return paths;
};