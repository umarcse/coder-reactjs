import React from "react";

const MovieCard = ({ item }) => {
  return (
    <>
      <div className="w-[310px] p-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          alt="movie__img"
        />
        <div>
          <h2> Titile :  {item.title} </h2>

          <p className=" text-xs"> People Liked : {item.vote_count} </p>
          <p className="text-xs"> Date : {item.release_date} </p>
          
        </div>
      </div>
    </>
  );
};

export default MovieCard;
