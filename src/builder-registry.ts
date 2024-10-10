"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import {
  Checkbox,
  HelpPanel,
  Icon,
  Link,
  SideNavigation,
  Table,
  TopNavigation,
} from "../builder-components";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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
