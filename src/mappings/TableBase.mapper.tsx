import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Table } from "@/builder-components";

interface FigmaTableBaseProps extends BaseFigmaProps {
  Type?: "Default" | "Empty" | "Loading" | "No match";
  Footer?: "Off" | "On";
}

figmaMapping({
  componentKey: "2e67825e412ec1eec8771a747409a24e5a31cc85",
  mapper(figma: FigmaTableBaseProps) {
    return (
      <Table
        columnDefinitions={[
          {
            id: "variable",
            header: "Variable name",
            sortingField: "name",
            isRowHeader: true,
          },
          {
            id: "value",
            header: "Text value",
            sortingField: "alt",
          },
          {
            id: "type",
            header: "Type",
          },
          {
            id: "description",
            header: "Description",
          },
        ]}
        columnDisplay={[
          { id: "variable", visible: true },
          { id: "value", visible: true },
          { id: "type", visible: true },
          { id: "description", visible: true },
        ]}
        items={[
          {
            name: "Item 1",
            alt: "First",
            description: "This is the first item",
            type: "1A",
            size: "Small",
          },
          {
            name: "Item 2",
            alt: "Second",
            description: "This is the second item",
            type: "1B",
            size: "Large",
          },
          {
            name: "Item 3",
            alt: "Third",
            description: "-",
            type: "1A",
            size: "Large",
          },
          {
            name: "Item 4",
            alt: "Fourth",
            description: "This is the fourth item",
            type: "2A",
            size: "Small",
          },
          {
            name: "Item 5",
            alt: "-",
            description: "This is the fifth item with a longer description",
            type: "2A",
            size: "Large",
          },
          {
            name: "Item 6",
            alt: "Sixth",
            description: "This is the sixth item",
            type: "1A",
            size: "Small",
          },
        ]}
        selectionType="multi"
        variant="container"
        loading={figma.Type === "Loading"}
        empty={
          figma.Type === "Empty" || figma.Type === "No match" ? (
            <div>No data available</div>
          ) : undefined
        }
      />
    );
  },
});
