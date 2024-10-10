"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import {
  AreaChart,
  BarChart,
  BreadcrumbGroup,
  Button,
  Header,
  Input,
  Pagination,
  TextFilter,
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
