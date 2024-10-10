import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Icon } from "@/builder-components";

interface FigmaIconProps extends BaseFigmaProps {
  Name?:
    | "Add"
    | "Angle double left"
    | "Angle double right"
    | "Angle left"
    | "Angle right"
    | "Angle up"
    | "Angle down"
    | "Arrow left"
    | "Calendar"
    | "Caret up"
    | "Caret down"
    | "Caret filled left"
    | "Caret filled right"
    | "Caret filled up"
    | "Caret filled down"
    | "Check"
    | "Close"
    | "Copy"
    | "Download"
    | "Edit"
    | "Ellipsis"
    | "Expand"
    | "External"
    | "Menu"
    | "Microphone"
    | "Notification"
    | "Refresh"
    | "Settings"
    | "Treview collapse"
    | "Treview expand"
    | "Undo"
    | "Upload"
    | "View full"
    | "View horizontal"
    | "View vertical"
    | "Zoom in"
    | "Zoom out"
    | "In progress"
    | "Info"
    | "Negative"
    | "Pending"
    | "Positive"
    | "Stopped"
    | "Warning"
    | "Bug"
    | "Call"
    | "Contact"
    | "Envelope"
    | "File"
    | "File open"
    | "Filter"
    | "Folder"
    | "Folder open"
    | "Heart"
    | "Key"
    | "Lock"
    | "Search"
    | "Share"
    | "Unlocked"
    | "User profile"
    | "audio-full"
    | "audio-half"
    | "audio-off"
    | "delete-marker"
    | "flag"
    | "group"
    | "group-active"
    | "insert-row"
    | "keyboard"
    | "multiscreen"
    | "remove"
    | "script"
    | "security"
    | "shrink"
    | "suggestions"
    | "thumbs-down"
    | "thumbs-down-filled"
    | "thumbs-up"
    | "thumbs-up-filled"
    | "ticket"
    | "upload-download"
    | "user-profile-active"
    | "video-disabled"
    | "video-off"
    | "video-on"
    | "zoom-to-fit";
  Size?: "Small" | "Medium" | "Big" | "Large";
  Type?: "Action" | "Status" | "Symbol" | "Community icon";
  "Visual context"?: "Light" | "Dark";
}

figmaMapping({
  componentKey: "4410e9b1b673fbbf124c7298372d99edf38eba6f",
  mapper(figma: FigmaIconProps) {
    return (
      <Icon
        name={figma.Name?.toLowerCase() as any}
        size={figma.Size?.toLowerCase() as "big" | "large" | "medium" | "small"}
        variant={figma["Visual context"] === "Dark" ? "inverted" : "normal"}
      />
    );
  },
});
