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
          title:
            figma.$findOneByName("Service name")?.$textContent || "Service",
          href: "#",
        }}
        utilities={[
          {
            type: "button",
            text: "Link",
            href: "https://example.com/",
            external: true,
            externalIconAriaLabel: " (opens in a new tab)",
          },
          {
            type: "button",
            iconName: "notification",
            title: "Notifications",
            ariaLabel: "Notifications (unread)",
            badge: true,
            disableUtilityCollapse: false,
          },
          {
            type: "menu-dropdown",
            iconName: "settings",
            ariaLabel: "Settings",
            title: "Settings",
            items: [
              {
                id: "settings-org",
                text: "Organizational settings",
              },
              {
                id: "settings-project",
                text: "Project settings",
              },
            ],
          },
          {
            type: "menu-dropdown",
            text: "Customer Name",
            description: "email@example.com",
            iconName: "user-profile",
            items: [
              { id: "profile", text: "Profile" },
              { id: "preferences", text: "Preferences" },
              { id: "security", text: "Security" },
              { id: "signout", text: "Sign out" },
            ],
          },
        ]}
      />
    );
  },
});
