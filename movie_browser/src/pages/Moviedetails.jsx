import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Moviedetails() {
  const [moviesdetails, setMoviesdetails] = useState({});
  const id = useParams();

  const Moviedetails = async () => {
    try {
      const response = await axios.get(
        `https://strategycoglobal.onrender.com/${id.person_imdbID}`
      );
      setMoviesdetails(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  console.log(moviesdetails);

  useEffect(() => {
    Moviedetails();
  }, []);
  return (
    <div className="bg-gray-100 ">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Movie Details</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 ">
         
            <div  className="group relative  ">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={moviesdetails.Poster}
                  alt={moviesdetails.imageAlt}
                  className="h-96 w-full object-cover object-center"
                />
              </div>
             
              <p className="text-base font-semibold text-gray-900">Title: {moviesdetails.Title}</p>
              <p className="text-base font-semibold text-gray-900">Actors: {moviesdetails.Actors}</p>
              <p className="text-base font-semibold text-gray-900">Type: {moviesdetails.Type}</p>
              <p className="text-base font-semibold text-gray-900">Language: {moviesdetails.Language}</p>
              <p className="text-base font-semibold text-gray-900">Released: {moviesdetails.Released}</p>
              <p className="text-base font-semibold text-gray-900">Writer: {moviesdetails.Writer}</p>
              <p className="text-base font-semibold text-gray-900">ImdbRating: {moviesdetails.imdbRating}</p>
              <p className="text-base font-semibold text-gray-900">Genre: {moviesdetails.Genre}</p>
              <p className="text-base font-semibold text-gray-900">Awards: {moviesdetails.Awards}</p>
              <p className="text-base font-semibold text-gray-900">Country: {moviesdetails.Country}</p>
              <p className="text-base font-semibold text-gray-900">Director: {moviesdetails.Director}</p>
              <p className="text-base font-semibold text-gray-900">ImdbVotes: {moviesdetails.imdbVotes}</p>
              <p className="text-base font-semibold text-gray-900">Year: {moviesdetails.Year}</p>
            </div>
      
        </div>
      </div>
    </div>
  </div>
  );
}

export default Moviedetails;
