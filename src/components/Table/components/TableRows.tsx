import React from "react";
import { ColumnDefinitionType } from "../Table";

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

export const TableRows = <T, K extends keyof T>({
  data,
  columns,
}: TableRowsProps<T, K>): React.ReactElement => {
  const rows = data.map((row) => {
    return (
      <tr key={`tr-${row}`}>
        {columns.map((column) => {
          return <td key={`td-${column.key}`}>{row[column.key]}</td>;
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};
