import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TopNavigation } from "@/builder-components";

interface FigmaTopNavigationProps extends BaseFigmaProps {
  Notifications?: boolean;
  "Utility control"?: boolean;
  Search?: boolean;
  "Screen size"?: "Large" | "Medium";
  Dropdown?: "Closed" | "Profile" | "Settings";
}

figmaMapping({
  componentKey: "56a35954cce8f53e9b417c0ef7d35fc9899363bc",
  mapper(figma: FigmaTopNavigationProps) {
    return (
      <TopNavigation
        identity={{
          title: figma.$findOneByName("Service name")?.$textContent as string,
          href: "#",
        }}
      />
    );
  },
});
