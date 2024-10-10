import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Input } from "@/builder-components";

interface FigmaInputProps extends BaseFigmaProps {
  Type?: "Basic" | "Search" | "Time" | "Numeric";
  Content?: "None" | "Value" | "Placeholder";
  State?: "Default" | "Active" | "Disabled" | "Read-only";
  Invalid?: "Off" | "On";
  "Visual context"?: "Light" | "Dark";
}

figmaMapping({
  componentKey: "9f56d1c87573504861f4b69a1a58eb37217270e8",
  mapper(figma: FigmaInputProps) {
    return (
      <Input
        type={
          figma.Type === "Search"
            ? "search"
            : figma.Type === "Time"
            ? "text"
            : figma.Type === "Numeric"
            ? "number"
            : "text"
        }
        value={
          figma.Content === "Value"
            ? figma.$children[0]?.$textContent ?? ""
            : ""
        }
        placeholder={
          figma.Content === "Placeholder"
            ? figma.$children[0]?.$textContent
            : undefined
        }
        disabled={figma.State === "Disabled"}
        readOnly={figma.State === "Read-only"}
        invalid={figma.Invalid === "On"}
      />
    );
  },
});
