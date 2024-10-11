import { AppLayout } from "@/builder-components";
import { figmaMapping } from "@builder.io/dev-tools/figma";

const explicitFalse = (value: any) => false;

figmaMapping({
  genericMapper(figma) {
    if (figma.$name.toLowerCase() === "app layout") {
      return (
        <div>
          {figma.$findOneByName("Top navigation")}
          <AppLayout
            navigation={figma.$findOneByName("Side navigation")}
            navigationOpen={explicitFalse(false)}
            content={figma.$findOneByName("App")}
          />
        </div>
      );
    }
    return undefined;
  },
});
