import { useState } from "react";

type Params = {
  pageSize?: number;
};

export function usePagination({ pageSize = 4 }: Params) {
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize,
    hasMore: true,
  });

  function getMorePage(totalPages: number) {
    setPagination((oldState) => ({
      ...oldState,
      hasMore: oldState.pageNumber <= totalPages,
      pageNumber: oldState.pageNumber + 1,
    }));
  }

  return { ...pagination, getMorePage };
}
