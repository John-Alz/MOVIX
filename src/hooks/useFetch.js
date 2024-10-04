import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setError, setLoading, setMoviesList, setTrendingMovies, setTvList, setUpCommingMovies } from "../redux/moviesSlice";

export function useFetch(url) {

    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(setLoading(true))
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (url.includes('trending/movie')) {
                    dispatch(setTrendingMovies(data.results));
                } else if (url.includes('movie/upcoming')) {
                    dispatch(setUpCommingMovies(data.results));
                } else if (url.includes('discover/movie')) {
                    dispatch(setMoviesList(data.results));
                } else if (url.includes('discover/tv')) {
                    dispatch(setTvList(data.results));
                }
            })
            .catch(error => dispatch(setError(error)))
            .finally(() => dispatch(setLoading(false)));

    }, [url, dispatch])


}