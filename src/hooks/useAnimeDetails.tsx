import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { AnimeDetail } from "../types/anime";
import { getAnimeDetails } from "../services/api";

export const useAnimeDetails = () => {
  const { t } = useTranslation("common");
  const { id } = useParams<{ id: string }>();
  const [anime, setAnime] = useState<AnimeDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getAnimeDetails(id!);
        setAnime(data.data);
      } catch {
        setError(t("failedToLoadDetails"));
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchDetails();
  }, [id]);

  return { anime, loading, error };
};
