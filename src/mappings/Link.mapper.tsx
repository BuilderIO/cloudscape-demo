import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Link } from "@/builder-components";

interface FigmaLinkProps extends BaseFigmaProps {
  Type?: "Primary" | "Secondary" | "Info" | "Button";
  State?: "Default" | "Hover";
}

figmaMapping({
  componentKey: "e6e810d9853676d622eef58fc84439a04c2a65f4",
  mapper(figma: FigmaLinkProps) {
    return (
      <Link
        variant={
          figma.Type?.toLowerCase() as
            | "primary"
            | "secondary"
            | "info"
            | undefined
        }
        href="#"
      >
        {figma.$children}
      </Link>
    );
  },
});
