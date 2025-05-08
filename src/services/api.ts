import { API } from "../utils/constants";

export async function searchAnime(
  query: string,
  page: number = 1,
  limit: number = 12
) {
  const res = await fetch(
    `${API.BASE_URL}/anime?q=${query}&page=${page}&limit=${limit}`
  );
  return res.json();
}

export async function getAnimeDetails(id: string) {
  const res = await fetch(`${API.BASE_URL}/anime/${id}`);
  if (!res.ok) throw new Error("Not found");
  return res.json();
}
