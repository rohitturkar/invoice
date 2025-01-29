import React from "react";

// Define types for the column and data structure
interface Column {
  label: string;
  field: string;
}

interface Row {
  [key: string]: any;
}

interface TableProps {
  data: Row[];
  columns: Column[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full border-collapse table-auto ">
        <thead>
          <tr className="bg-gray-100 border rounded-2xl">
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left font-medium text-gray-700 text-sm 2xl:text-lg "
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="border-b ">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-gray-800 text-xs 2xl:text-sm max-w-[25%] w-full text-wrap">
                  {

                    item[column.field]==='View'?<button className='bg-white border border-gray-200  px-2 py-1.5 text-black rounded-md '>{item[column.field]}</button>:item[column.field]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
