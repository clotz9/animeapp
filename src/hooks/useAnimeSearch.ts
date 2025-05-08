// src/hooks/useAnimeSearch.ts
import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";
import { AnimeSearch, ApiResponse } from "../types/anime";
import { searchAnime } from "../services/api";

export const useAnimeSearch = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 250);
  const [results, setResults] = useState<AnimeSearch[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (debouncedQuery) {
      setPage(1);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      try {
        setLoading(true);
        setError("");
        const data: ApiResponse<AnimeSearch> = await searchAnime(
          debouncedQuery,
          page
        );
        setResults(data.data);
        setLastPage(data.pagination.last_visible_page);
      } catch {
        setError("Failed to fetch anime.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [debouncedQuery, page]);

  return {
    query,
    debouncedQuery,
    setQuery,
    results,
    page,
    setPage,
    lastPage,
    loading,
    error,
  };
};
