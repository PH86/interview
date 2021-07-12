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
  const rows = data.map((row, index) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <tr key={`tr-${index}`}>
        {columns.map((column) => {
          return <td key={`td-${column.key}`}>{row[column.key]}</td>;
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};
