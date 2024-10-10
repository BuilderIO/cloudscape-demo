import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { SideNavigation } from "@/builder-components";

interface FigmaSideNavigationProps extends BaseFigmaProps {
  State?: "Closed" | "Open";
  Example?:
    | "Simple"
    | "Sections"
    | "Expandable link groups"
    | "Link groups"
    | "Small logo"
    | "Large logo";
}

figmaMapping({
  componentKey: "753b0ad5cc2026910bbdce2c26625150fcbb4506",
  mapper(figma: FigmaSideNavigationProps) {
    return <SideNavigation itemsControl={figma.$children} />;
  },
});
