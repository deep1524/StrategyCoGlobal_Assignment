import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {},
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 16,
    },

    // More posts...
  ];
  // fetch movies
  const getdata = async () => {
    let list = "movie";
    try {
      const response = await axios.get(
        `https://strategycoglobal.onrender.com/api/movies?q=${list}`
      );
      setMovies(response.data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://strategycoglobal.onrender.com/api/movies?q=${searchQuery}`
      );
      setMovies(response.data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  // console.log(movies);
  // console.log(searchQuery)
  useEffect(() => {
    setTimeout(function () {
      getdata();
      if (searchQuery) {
        fetchMovies();
      }
    }, 1000);
  }, []);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Movie App
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mb-5">
            <div className="mt-2">
              <input
                type="text"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className=" p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={fetchMovies}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="w-96 m-auto">
        <p className="text-5xl ml-20 font-bold">Movie List</p>
        <ul role="list" className="divide-y divide-gray-100 w-96  m-auto">
          {movies.length !== 0 ? (
            <div>
              {movies.map((person) => (
                <li
                  key={person.imdbID}
                  className="flex justify-between gap-x-6 py-5"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src={person.Poster}
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {person.Title}
                      </p>
                      <Link to={`/movie/${person.imdbID}`}>
                        <button className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Movie Details
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {person.Year}
                    </p>

                    <div className="mt-1 flex items-center gap-x-1.5">
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person.Type}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          ) : (
            <div>
              {data.map((person) => (
                <li
                  key={person.imdbID}
                  className="flex justify-between gap-x-6 py-5"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <Skeleton circle={true} width={50} height={50} />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        <Skeleton />
                      </p>

                      <Skeleton
                        width={100}
                        className="flex w-40  wjustify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Movie Details
                      </Skeleton>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      <Skeleton width={40} />
                    </p>

                    <div className="mt-1 flex items-center gap-x-1.5">
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        <Skeleton width={40} />
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
