import { Pagination, Box } from "@mui/material";

import { AnimeSearch } from "../types/anime";

interface PaginationProps {
  results: AnimeSearch[];
  page: number;
  setPage: (page: number) => void;
  lastPage: number;
}

const PagePagination = ({
  results,
  page,
  setPage,
  lastPage,
}: PaginationProps) => {
  return (
    <>
      {results.length > 0 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={lastPage}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </>
  );
};

export default PagePagination;
