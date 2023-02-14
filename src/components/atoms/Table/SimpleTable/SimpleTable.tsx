import React, { ReactElement, ReactNode } from "react";
import THead from "../THead/THead";

type SimpleTableProps = {
  headerList: string[];
  contentList: ReactNode;
};

const SimpleTable = (props: SimpleTableProps) => {
  const header = props.headerList.map((value) => {
    return <THead key={value}>{value}</THead>;
  });

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="py-4">
        <div className="-mx-4 sm:-mx-8 px-2 sm:px-8 py-2 overflow-x-auto">
          <div className="inline-block min-w-full overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>{header}</tr>
              </thead>
              <tbody>{props.contentList}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTable;
