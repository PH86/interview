import React from "react";
import { TableHeader, TableRows } from "./components";
import "./Table.css";

// <T, K extends keyof T>
// T means any type is ok and K is used as a type for our key property
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
};

type TableType<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
  data: Array<T>;
};

export const Table = <T, K extends keyof T>({
  columns,
  data,
}: TableType<T, K>): React.ReactElement => {
  return (
    <table className="table" cellSpacing={0}>
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  );
};
