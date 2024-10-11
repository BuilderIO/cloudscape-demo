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
              {
                id: "support-group",
                text: "Support",
                items: [
                  {
                    id: "documentation",
                    text: "Documentation",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                  { id: "support", text: "Support" },
                  {
                    id: "feedback",
                    text: "Feedback",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                ],
              },
              { id: "signout", text: "Sign out" },
            ],
          },
        ]}
      />
    );
  },
});
