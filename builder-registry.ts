import { builder, Builder, withChildren } from "@builder.io/react";
import {
  AppLayout,
  AreaChart,
  BarChart,
  BreadcrumbGroup,
  Button,
  Checkbox,
  FormField,
  Header,
  HelpPanel,
  Icon,
  Input,
  Link,
  Pagination,
  SideNavigation,
  Table,
  TextFilter,
  TopNavigation,
} from "./builder-components";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(BreadcrumbGroup, {
  name: "BreadcrumbGroup",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "expandAriaLabel",
      type: "string",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "items",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly T[]",
      },
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(Header), {
  name: "Header",
  inputs: [
    {
      name: "actions",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "counter",
      type: "string",
    },
    {
      name: "description",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "headingTagOverride",
      type: "string",
      enum: ["h1", "h2", "h3", "h4", "h5"],
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "info",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["awsui-h1-sticky", "h1", "h2", "h3"],
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disabledReason",
      type: "string",
    },
    {
      name: "download",
      type: "string",
      meta: {
        ts: "string | boolean",
      },
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "href",
      type: "string",
    },
    {
      name: "iconAlign",
      type: "string",
      enum: ["left", "right"],
    },
    {
      name: "iconAlt",
      type: "string",
    },
    {
      name: "iconName",
      type: "string",
      meta: {
        ts: "Name",
      },
    },
    {
      name: "iconSvg",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "iconUrl",
      type: "string",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "loading",
      type: "boolean",
    },
    {
      name: "loadingText",
      type: "string",
    },
    {
      name: "target",
      type: "string",
    },
    {
      name: "variant",
      type: "string",
      enum: ["icon", "inline-icon", "inline-link", "link", "normal", "primary"],
    },
    {
      name: "wrapText",
      type: "boolean",
    },
  ],
});

Builder.registerComponent(TextFilter, {
  name: "TextFilter",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "controlId",
      type: "string",
    },
    {
      name: "countText",
      type: "string",
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "filteringAriaLabel",
      type: "string",
    },
    {
      name: "filteringClearAriaLabel",
      type: "string",
    },
    {
      name: "filteringPlaceholder",
      type: "string",
    },
    {
      name: "filteringText",
      type: "string",
      required: true,
    },
    {
      name: "id",
      type: "string",
    },
  ],
});

Builder.registerComponent(Input, {
  name: "Input",
  inputs: [
    {
      name: "autoComplete",
      type: "string",
      meta: {
        ts: "string | boolean",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "clearAriaLabel",
      type: "string",
    },
    {
      name: "controlId",
      type: "string",
    },
    {
      name: "disableBrowserAutocorrect",
      type: "boolean",
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "invalid",
      type: "boolean",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "readOnly",
      type: "boolean",
    },
    {
      name: "step",
      type: "string",
      enum: ["any"],
    },
    {
      name: "type",
      type: "string",
      enum: ["email", "number", "password", "search", "text", "url"],
    },
    {
      name: "value",
      type: "string",
      required: true,
    },
    {
      name: "warning",
      type: "boolean",
    },
  ],
});

Builder.registerComponent(Pagination, {
  name: "Pagination",
  inputs: [
    {
      name: "currentPageIndex",
      type: "number",
      required: true,
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "openEnd",
      type: "boolean",
    },
    {
      name: "pagesCount",
      type: "number",
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(AreaChart), {
  name: "AreaChart",
  inputs: [
    {
      name: "additionalFilters",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "detailPopoverFooter",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "DetailPopoverFooter<T>",
      },
    },
    {
      name: "detailPopoverSize",
      type: "string",
      enum: ["large", "medium", "small"],
    },
    {
      name: "detailTotalFormatter",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TickFormatter<number>",
      },
    },
    {
      name: "empty",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "errorText",
      type: "string",
    },
    {
      name: "fitHeight",
      type: "boolean",
    },
    {
      name: "height",
      type: "number",
    },
    {
      name: "hideFilter",
      type: "boolean",
    },
    {
      name: "hideLegend",
      type: "boolean",
    },
    {
      name: "highlightedSeries",
      type: "string",
      meta: {
        ts: "Series",
      },
    },
    {
      name: "i18nStrings",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "I18nStrings<T>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "legendTitle",
      type: "string",
    },
    {
      name: "loadingText",
      type: "string",
    },
    {
      name: "noMatch",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "recoveryText",
      type: "string",
    },
    {
      name: "series",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly Series<T>[]",
      },
      required: true,
    },
    {
      name: "statusType",
      type: "string",
      enum: ["error", "finished", "loading"],
    },
    {
      name: "visibleSeries",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly Series[]",
      },
    },
    {
      name: "xDomain",
      type: "string",
      meta: {
        ts: "T extends unknown ? readonly T[] : readonly T[]",
      },
    },
    {
      name: "xScaleType",
      type: "string",
      enum: ["categorical", "linear", "log", "time"],
    },
    {
      name: "xTickFormatter",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TickFormatter<T>",
      },
    },
    {
      name: "xTitle",
      type: "string",
    },
    {
      name: "yDomain",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly number[]",
      },
    },
    {
      name: "yScaleType",
      type: "string",
      enum: ["linear", "log"],
    },
    {
      name: "yTickFormatter",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TickFormatter<number>",
      },
    },
    {
      name: "yTitle",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(BarChart), {
  name: "BarChart",
  inputs: [
    {
      name: "additionalFilters",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "detailPopoverFooter",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "DetailPopoverFooter<T>",
      },
    },
    {
      name: "detailPopoverSeriesContent",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "DetailPopoverSeriesContent<T>",
      },
    },
    {
      name: "detailPopoverSize",
      type: "string",
      enum: ["large", "medium", "small"],
    },
    {
      name: "emphasizeBaselineAxis",
      type: "boolean",
    },
    {
      name: "empty",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "errorText",
      type: "string",
    },
    {
      name: "fitHeight",
      type: "boolean",
    },
    {
      name: "height",
      type: "number",
    },
    {
      name: "hideFilter",
      type: "boolean",
    },
    {
      name: "hideLegend",
      type: "boolean",
    },
    {
      name: "highlightedSeries",
      type: "string",
      meta: {
        ts: "Series",
      },
    },
    {
      name: "horizontalBars",
      type: "boolean",
    },
    {
      name: "i18nStrings",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "I18nStrings<T>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "legendTitle",
      type: "string",
    },
    {
      name: "loadingText",
      type: "string",
    },
    {
      name: "noMatch",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "recoveryText",
      type: "string",
    },
    {
      name: "series",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly BarSeries<T>[]",
      },
      required: true,
    },
    {
      name: "stackedBars",
      type: "boolean",
    },
    {
      name: "statusType",
      type: "string",
      enum: ["error", "finished", "loading"],
    },
    {
      name: "visibleSeries",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly Series[]",
      },
    },
    {
      name: "xDomain",
      type: "string",
      meta: {
        ts: "T extends unknown ? readonly T[] : readonly T[]",
      },
    },
    {
      name: "xScaleType",
      type: "string",
      enum: ["categorical", "linear", "log", "time"],
    },
    {
      name: "xTickFormatter",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TickFormatter<T>",
      },
    },
    {
      name: "xTitle",
      type: "string",
    },
    {
      name: "yDomain",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly number[]",
      },
    },
    {
      name: "yScaleType",
      type: "string",
      enum: ["linear", "log"],
    },
    {
      name: "yTickFormatter",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TickFormatter<number>",
      },
    },
    {
      name: "yTitle",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(AppLayout), {
  name: "AppLayout",
  inputs: [
    {
      name: "activeDrawerId",
      type: "string",
    },
    {
      name: "analyticsMetadata",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "AnalyticsMetadata",
      },
    },
    {
      name: "breadcrumbs",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "content",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "contentHeader",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "contentType",
      type: "string",
      enum: ["cards", "dashboard", "default", "form", "table", "wizard"],
    },
    {
      name: "disableBodyScroll",
      type: "boolean",
    },
    {
      name: "disableContentHeaderOverlap",
      type: "boolean",
    },
    {
      name: "disableContentPaddings",
      type: "boolean",
    },
    {
      name: "drawers",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Drawer[]",
      },
    },
    {
      name: "footerSelector",
      type: "string",
    },
    {
      name: "headerSelector",
      type: "string",
    },
    {
      name: "headerVariant",
      type: "string",
      enum: ["default", "high-contrast"],
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "maxContentWidth",
      type: "number",
    },
    {
      name: "minContentWidth",
      type: "number",
    },
    {
      name: "navigation",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "navigationHide",
      type: "boolean",
    },
    {
      name: "navigationOpen",
      type: "boolean",
    },
    {
      name: "navigationWidth",
      type: "number",
    },
    {
      name: "notifications",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "splitPanel",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "splitPanelOpen",
      type: "boolean",
    },
    {
      name: "splitPanelPreferences",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SplitPanelPreferences",
      },
    },
    {
      name: "splitPanelSize",
      type: "number",
    },
    {
      name: "stickyNotifications",
      type: "boolean",
    },
    {
      name: "tools",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "toolsHide",
      type: "boolean",
    },
    {
      name: "toolsOpen",
      type: "boolean",
    },
    {
      name: "toolsWidth",
      type: "number",
    },
  ],
});

Builder.registerComponent(withChildren(TopNavigation), {
  name: "TopNavigation",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "i18nStrings",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "I18nStrings",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "identity",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Identity",
      },
      required: true,
    },
    {
      name: "search",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "utilities",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly Utility[]",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Table), {
  name: "Table",
  inputs: [
    {
      name: "analyticsMetadata",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "AnalyticsMetadata",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "columnDefinitions",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly ColumnDefinition<T>[]",
      },
      required: true,
    },
    {
      name: "columnDisplay",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly ColumnDisplayProperties[]",
      },
    },
    {
      name: "contentDensity",
      type: "string",
      enum: ["comfortable", "compact"],
    },
    {
      name: "empty",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "enableKeyboardNavigation",
      type: "boolean",
    },
    {
      name: "expandableRows",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "ExpandableRows<T>",
      },
    },
    {
      name: "filter",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "firstIndex",
      type: "number",
    },
    {
      name: "footer",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "getLoadingStatus",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "GetLoadingStatus<T>",
      },
    },
    {
      name: "header",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isItemDisabled",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "IsItemDisabled<T>",
      },
    },
    {
      name: "items",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly T[]",
      },
      required: true,
    },
    {
      name: "loading",
      type: "boolean",
    },
    {
      name: "loadingText",
      type: "string",
    },
    {
      name: "pagination",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "preferences",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "ref",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<Ref>",
      },
    },
    {
      name: "renderAriaLive",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "(data: LiveAnnouncement) => string",
      },
    },
    {
      name: "renderLoaderError",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "renderLoaderLoading",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "renderLoaderPending",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "resizableColumns",
      type: "boolean",
    },
    {
      name: "selectedItems",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly T[]",
      },
    },
    {
      name: "selectionType",
      type: "string",
      enum: ["multi", "single"],
    },
    {
      name: "sortingColumn",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SortingColumn<T>",
      },
    },
    {
      name: "sortingDescending",
      type: "boolean",
    },
    {
      name: "sortingDisabled",
      type: "boolean",
    },
    {
      name: "stickyColumns",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "StickyColumns",
      },
    },
    {
      name: "stickyHeader",
      type: "boolean",
    },
    {
      name: "stickyHeaderVerticalOffset",
      type: "number",
    },
    {
      name: "stripedRows",
      type: "boolean",
    },
    {
      name: "submitEdit",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SubmitEditFunction<T, unknown>",
      },
    },
    {
      name: "totalItemsCount",
      type: "number",
    },
    {
      name: "trackBy",
      type: "string",
      meta: {
        ts: "TrackBy<T>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["borderless", "container", "embedded", "full-page", "stacked"],
    },
    {
      name: "visibleColumns",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly string[]",
      },
    },
    {
      name: "wrapLines",
      type: "boolean",
    },
  ],
});

Builder.registerComponent(withChildren(SideNavigation), {
  name: "SideNavigation",
  inputs: [
    {
      name: "activeHref",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "header",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Header",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "items",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "readonly Item[]",
      },
    },
    {
      name: "itemsControl",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Checkbox), {
  name: "Checkbox",
  inputs: [
    {
      name: "checked",
      type: "boolean",
      required: true,
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "controlId",
      type: "string",
    },
    {
      name: "description",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "indeterminate",
      type: "boolean",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "readOnly",
      type: "boolean",
    },
  ],
});

Builder.registerComponent(withChildren(FormField), {
  name: "FormField",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "constraintText",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "controlId",
      type: "string",
    },
    {
      name: "description",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "errorText",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "i18nStrings",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "I18nStrings",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "info",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "secondaryControl",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "stretch",
      type: "boolean",
    },
    {
      name: "warningText",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(withChildren(HelpPanel), {
  name: "HelpPanel",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "footer",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "header",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "loading",
      type: "boolean",
    },
    {
      name: "loadingText",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(Icon), {
  name: "Icon",
  inputs: [
    {
      name: "alt",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "name",
      type: "string",
      meta: {
        ts: "Name",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["big", "inherit", "large", "medium", "normal", "small"],
    },
    {
      name: "svg",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "url",
      type: "string",
    },
    {
      name: "variant",
      type: "string",
      enum: [
        "disabled",
        "error",
        "inverted",
        "link",
        "normal",
        "subtle",
        "success",
        "warning",
      ],
    },
  ],
});

Builder.registerComponent(withChildren(Link), {
  name: "Link",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: ["inverted", "normal"],
    },
    {
      name: "external",
      type: "boolean",
    },
    {
      name: "externalIconAriaLabel",
      type: "string",
    },
    {
      name: "fontSize",
      type: "string",
      enum: [
        "body-m",
        "body-s",
        "display-l",
        "heading-l",
        "heading-m",
        "heading-s",
        "heading-xl",
        "heading-xs",
        "inherit",
      ],
    },
    {
      name: "href",
      type: "string",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "target",
      type: "string",
    },
    {
      name: "variant",
      type: "string",
      enum: ["awsui-value-large", "info", "primary", "secondary"],
    },
  ],
});
