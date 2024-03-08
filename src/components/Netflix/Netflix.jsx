import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Addmovie from "./Addmovie";
const Netflix = ({ fetchURL }) => {
  const [movies, setMoives] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMoives(res.data.results);
    });
  }, []);
  
  const setmoviefun = (newmovie) =>{

    setMoives([...movies, {...newmovie, id: newmovie.length+1} ]);
    
  }

 console.log(movies);
  return (
    <>
      <div>
        <Addmovie setmoviefun= { setmoviefun} />
      </div>
      <div className="flex flex-wrap justify-around">
        {movies.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Netflix;
