import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { BarChart } from "@/builder-components";

interface FigmaBarChartProps extends BaseFigmaProps {
  "Show Average line"?: boolean;
  "Show legends"?: boolean;
  "Show filter"?: boolean;
  Type?: "Stacked horizontally" | "Single" | "Grouped" | "Stacked vertically";
  State?: "Default" | "Hover" | "Active";
}

figmaMapping({
  componentKey: "6723d2c468d81fae60929db2c628c47acc9f1832",
  mapper(figma: FigmaBarChartProps) {
    return (
      <BarChart
        series={[
          {
            title: "Site 1",
            type: "bar",
            data: [
              { x: 1601103600000, y: 34503 },
              { x: 1601110800000, y: 25832 },
              { x: 1601118000000, y: 4012 },
              { x: 1601125200000, y: -5602 },
              { x: 1601132400000, y: 17839 },
            ],
          },
          {
            title: "Average revenue",
            type: "threshold",
            y: 19104,
          },
        ]}
        stackedBars={figma.Type?.includes("Stacked") || false}
        horizontalBars={figma.Type === "Stacked horizontally" || false}
        hideLegend={!figma["Show legends"]}
        hideFilter={!figma["Show filter"]}
        statusType={figma.State === "Default" ? "finished" : "loading"}
      />
    );
  },
});
