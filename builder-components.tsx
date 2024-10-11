import { TableProps, Table as TableBase } from "@cloudscape-design/components";

export {
  AppLayout,
  Button,
  AreaChart,
  TopNavigation,
  Header,
  Pagination,
  TextFilter,
  Input,
  BreadcrumbGroup,
  BarChart,
  Icon,
  Link,
  FormField,
  Checkbox,
  SideNavigation,
  HelpPanel,
} from "@cloudscape-design/components";

// Workaround for the lack of cell function in the Table component
type TablePropsWithoutCellFunction = Omit<TableProps, "columnDefinitions"> & {
  columnDefinitions: Omit<TableProps.ColumnDefinition<any>, "cell">[];
};
export const Table = (props: TablePropsWithoutCellFunction) => {
  return (
    <TableBase
      {...props}
      columnDefinitions={props.columnDefinitions.map((col) => ({
        ...col,
        cell: (item: any) =>
          item[(col.sortingField || col.id) as keyof typeof item],
      }))}
    />
  );
};
