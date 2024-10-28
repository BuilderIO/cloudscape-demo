import {
  TableProps,
  Table as TableBase,
  AppLayout as AppLayoutBase,
  AppLayoutProps,
  AreaChartProps,
  AreaChart as AreaChartBase,
  BarChartProps,
  BarChart as BarChartBase,
} from "@cloudscape-design/components";

export {
  Button,
  TopNavigation,
  Header,
  Pagination,
  TextFilter,
  Input,
  BreadcrumbGroup,
  Icon,
  Link,
  FormField,
  Checkbox,
  SideNavigation,
  HelpPanel,
} from "@cloudscape-design/components";

export const AreaChart = (props: AreaChartProps<any>) => {
  return <AreaChartBase {...props} series={props.series || []} />;
};

export const BarChart = (props: BarChartProps<any>) => {
  return <BarChartBase {...props} series={props.series || []} />;
};

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
      columnDefinitions={(props.columnDefinitions || []).map((col) => ({
        ...col,
        cell: (item: any) =>
          get(item, col.sortingField || col.id || "") ||
          get(item, col.id || ""),
      }))}
    />
  );
};

const get = (obj: any, path: string) => {
  const value = path.split(".").reduce((acc, part) => acc && acc[part], obj);
  return value;
};
