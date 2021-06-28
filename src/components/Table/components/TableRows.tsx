import React from 'react';
import { ColumnDefinitionType } from '../Table'

type TableRowsProps<T, K extends keyof T> = {
    data: Array<T>;
    columns: Array<ColumnDefinitionType<T, K>>;
}

const TableRows = <T, K extends keyof T>({data, columns}: TableRowsProps<T, K>): React.ReactElement => {
    const rows = data.map((row, i) => {
        return (
            <tr key={`tr-${i}`}>
                {columns.map((column, j) => {
                    return (
                        <td key={`td-${j}`}>
                            {row[column.key]}
                        </td>
                    )
                })}
            </tr>
        )
    });
    
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

export default TableRows;