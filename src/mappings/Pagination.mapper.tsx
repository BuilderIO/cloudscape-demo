import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Pagination } from "@/builder-components";

interface FigmaPaginationProps extends BaseFigmaProps {
  Type?: "Open end" | "Simple";
  State?: "Disabled" | "Enabled";
  "Visual context"?: "Light" | "Dark";
}

figmaMapping({
  componentKey: "f2f490468aa94d7b57808494f545a63437905860",
  mapper(figma: FigmaPaginationProps) {
    return (
      <Pagination
        currentPageIndex={1}
        pagesCount={5}
        openEnd={figma.Type === "Open end"}
        disabled={figma.State === "Disabled"}
      />
    );
  },
});
