import React from 'react';

interface TableProps<T> extends React.ComponentPropsWithoutRef<'table'> {
  data: T[];
  renderHeader: () => React.ReactNode;
  renderRow: (item: T) => React.ReactNode;
  tbodyClassName?: string;
}

export function Table<T>(props: TableProps<T>) {
  const { className, tbodyClassName, renderHeader, data, renderRow, ...rest } = props;

  return (
    <table className={`ui:w-full ui:border-collapse ${className ?? ''}`} {...rest}>
      <thead className="ui:text-left ui:relative ui:z-10">{renderHeader()}</thead>
      <tbody className={`${tbodyClassName ?? ''}`}>{data.map((row) => renderRow(row))}</tbody>
    </table>
  );
}
