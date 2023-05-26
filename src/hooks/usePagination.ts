import { useState } from "react";

type Params = {
  pageSize?: number;
};

export function usePagination({ pageSize = 4 }: Params) {
  const [pagination, setPagination] = useState({
    pageSize,
    hasMore: true,
    currentPage: 1,
  });

  function getMorePage(currentPage: number, totalPages: number) {
    setPagination((oldState) => ({
      ...oldState,
      hasMore: oldState.currentPage <= totalPages,
      currentPage,
    }));
  }

  return { ...pagination, getMorePage };
}
