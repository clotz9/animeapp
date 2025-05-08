import { Container, Grid, CircularProgress, Alert, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAnimeSearch } from "../hooks/useAnimeSearch";
import Header from "../components/common/Header";
import AnimeCard from "../components/AnimeCard";
import SearchBar from "../components/SearchBar";
import PulsingPrompt from "../components/PulsingPrompt";
import PagePagination from "../components/Pagination";

const SearchPage = () => {
  const {
    query,
    debouncedQuery,
    setQuery,
    results,
    page,
    setPage,
    lastPage,
    loading,
    error,
  } = useAnimeSearch();

  const { t } = useTranslation("common");

  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{ py: 4, backgroundColor: "background.default", marginTop: "64px" }}
      >
        <Grid container justifyContent="center">
          <SearchBar query={query} setQuery={setQuery} />
        </Grid>

        {loading && (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress />
          </Box>
        )}

        {error && <Alert severity="error">{error}</Alert>}

        {!loading && debouncedQuery && results.length === 0 && (
          <Alert severity="info">{t("noResultsFound")}</Alert>
        )}

        {!query && <PulsingPrompt />}

        <Grid container spacing={3}>
          <AnimeCard results={results} />
        </Grid>

        <PagePagination
          results={results}
          page={page}
          setPage={setPage}
          lastPage={lastPage}
        />
      </Container>
    </>
  );
};

export default SearchPage;
