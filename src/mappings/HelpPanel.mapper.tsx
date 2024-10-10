import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { HelpPanel } from "@/builder-components";

interface FigmaHelpPanelProps extends BaseFigmaProps {
  State?: "Closed" | "Open" | "Loading";
}

figmaMapping({
  componentKey: "be7139eb80e5df7d3d81daee698541f17963ead1",
  mapper(figma: FigmaHelpPanelProps) {
    return (
      <HelpPanel loading={figma.State === "Loading"} loadingText="Loading...">
        {figma.$children}
      </HelpPanel>
    );
  },
});
