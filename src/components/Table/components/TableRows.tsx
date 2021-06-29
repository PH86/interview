import React from 'react';
import { ColumnDefinitionType } from '../Table'

type TableRowsProps<T, K extends keyof T> = {
    data: Array<T>;
    columns: Array<ColumnDefinitionType<T, K>>;
}

const TableRows = <T, K extends keyof T>({data, columns}: TableRowsProps<T, K>): React.ReactElement => {
    const rows = data.map((row, rowIndex) => {
        return (
            <tr key={`tr-${rowIndex}`}>
                {columns.map((column, columnIndex) => {
                    return (
                        <td key={`td-${columnIndex}`}>
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