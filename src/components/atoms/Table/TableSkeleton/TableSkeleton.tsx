import React from "react";
import CardContainer from "../../CardContainer/CardContainer";

const TableSkeleton = () => {
  return (
    <div className="mx-4">
      <CardContainer>
        <div className="bg-white w-full mx-auto rounded-2xl mt-8">
          <div className="bg-gray-200 h-12 p-3 overflow-hidden animate-pulse"></div>
          <div className="">
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default TableSkeleton;
