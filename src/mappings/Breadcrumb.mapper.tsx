import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { BreadcrumbGroup } from "@/builder-components";

interface FigmaBreadcrumbProps extends BaseFigmaProps {
  Count?: "2x" | "3x" | "4x" | "5x";
}

figmaMapping({
  componentKey: "49ecd03e916e48c6eb3fe3573940971640256af0",
  mapper(figma: FigmaBreadcrumbProps) {
    return (
      <BreadcrumbGroup
        items={
          figma.$children?.map((child) => ({
            text: child?.$textContent ?? "",
            href: "#",
          })) ?? []
        }
        ariaLabel="Breadcrumbs"
      />
    );
  },
});
