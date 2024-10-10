import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Button } from "@/builder-components";

interface FigmaButtonProps extends BaseFigmaProps {
  Type?:
    | "Primary"
    | "Secondary"
    | "Secondary only icon"
    | "Link button"
    | "Icon"
    | "Inline icon"
    | "Navigation"
    | "Alert"
    | "Help panel";
  State?: "Default" | "Hover" | "Active" | "Disabled" | "Loading";
  "Visual context"?: "Light" | "Dark";
}

figmaMapping({
  componentKey: "e4a33cb6fca296d8cc5bb870010861552fd2d022",
  mapper(figma: FigmaButtonProps) {
    return (
      <Button
        variant={
          figma.Type === "Primary"
            ? "primary"
            : figma.Type === "Secondary"
            ? "normal"
            : figma.Type === "Secondary only icon"
            ? "icon"
            : figma.Type === "Link button"
            ? "link"
            : figma.Type === "Icon"
            ? "icon"
            : figma.Type === "Inline icon"
            ? "inline-icon"
            : "normal"
        }
        disabled={figma.State === "Disabled"}
        loading={figma.State === "Loading"}
      >
        {figma.$children[0].$children}
      </Button>
    );
  },
});
