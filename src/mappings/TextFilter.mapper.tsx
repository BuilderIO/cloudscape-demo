import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextFilter } from "@/builder-components";

interface FigmaTextFilterProps extends BaseFigmaProps {
  Type?: "Empty" | "With matches";
  State?: "Default" | "Active" | "Disabled";
  Content?: "Placeholder" | "Value";
  "Visual context"?: "Light" | "Dark";
}

figmaMapping({
  componentKey: "4067802c99c825b20198338b38a2f743e8094c71",
  mapper(figma: FigmaTextFilterProps) {
    return (
      <TextFilter
        filteringText={
          figma.Content === "Value"
            ? figma.$children[0]?.$textContent ?? ""
            : ""
        }
        filteringPlaceholder={
          figma.Content === "Placeholder"
            ? figma.$children[0]?.$textContent ?? ""
            : undefined
        }
        disabled={figma.State === "Disabled"}
      />
    );
  },
});
