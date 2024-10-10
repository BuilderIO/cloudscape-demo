import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Checkbox } from "@/builder-components";

interface FigmaElementsCheckboxOnlyCheckboxProps extends BaseFigmaProps {
  State?:
    | "Default"
    | "Selected"
    | "Indeterminate"
    | "Indeterminate Disabled"
    | "Disabled"
    | "Selected disabled";
  "Visual context"?: "Light" | "Dark";
}

figmaMapping({
  componentKey: "3df20007f5244f2d1aff2b95444f7c3dfaf6df58",
  mapper(figma: FigmaElementsCheckboxOnlyCheckboxProps) {
    return (
      <Checkbox
        checked={
          figma.State === "Selected" || figma.State === "Selected disabled"
        }
        indeterminate={
          figma.State === "Indeterminate" ||
          figma.State === "Indeterminate Disabled"
        }
        disabled={
          figma.State === "Disabled" ||
          figma.State === "Selected disabled" ||
          figma.State === "Indeterminate Disabled"
        }
      />
    );
  },
});
