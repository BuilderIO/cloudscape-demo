import { AppLayout } from "@/builder-components";
import { figmaMapping } from "@builder.io/dev-tools/figma";

const explicitFalse = (value: any) => false;

figmaMapping({
  genericMapper(figma) {
    // App layout is a detached component so we need to map it here per it
    // being no longer a Figma component and just a normal layer
    if (figma.$name.toLowerCase() === "app layout") {
      return (
        <div>
          {figma.$findOneByName("Top navigation")}
          <AppLayout
            navigation={figma.$findOneByName("Side navigation")}
            navigationOpen={explicitFalse(false)}
          >
            {figma.$findOneByName("App")}
          </AppLayout>
        </div>
      );
    }
    return undefined;
  },
});
