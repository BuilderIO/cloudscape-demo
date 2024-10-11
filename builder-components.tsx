import {
  TableProps,
  Table as TableBase,
  AppLayout as AppLayoutBase,
  AppLayoutProps,
} from "@cloudscape-design/components";

export {
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

// Workaround for AppLayout not accepting children - full fix coming shortly
export const AppLayout = (props: React.PropsWithChildren<AppLayoutProps>) => {
  return <AppLayoutBase {...props} content={props.children} />;
};

// Workaround for the lack of cell function in the Table component - coming shortly
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
