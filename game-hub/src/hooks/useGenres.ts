import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import ms from 'ms'
import genres from "../data/genres";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres')

// const useGenres = () => useQuery({
//   queryKey: ['genres'],
//   queryFn: apiClient.getAll,
//   staleTime: 24 * 60 * 60 * 1000, //24h
//   initialData: { count:  genres.length, results: genres }
// })
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'), //24h
  initialData: genres
})


export default useGenres