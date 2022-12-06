import { useState, useEffect } from "react";
// const MOVIE = ["action", "comedy", "horror"]
import Movie from "./Movie";

const SearchParams = () => {
    const [location, setLocation] = useState("")
    // const [movie, setMovie] = useState("");
    // const [apimovie, setapiMovie] = useState("");
    const [result, setResults] = useState([]);
    // const apis = [];
    
    useEffect(() => {
        requestSearch();
    },[])

    async function requestSearch(){
        const API_KEY = "36aa0f5f49e955969097838d95356f6c";
        
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${location}`);
            const json = await res.json();
            setResults(json.results);

            console.log(json.results)//ARRAYS
            // console.log(search);
    }

    return  (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestSearch();
            }}>
                <label htmlFor="location">
                    Movie Name: <br></br>
                    <input onChange={e => setLocation(e.target.value)} id="location" 
                    value= {location} placeholder="Location" />

                </label>

                {/* <label htmlFor="movie">
                    Movie Type: <br></br>
                    <select name="" id="movie" value={movie} 
                    onChange = {e => {
                        setMovie(e.target.value);
                        setapiMovie("")
                        }
                    }>
                        <option />
                        {MOVIE.map((movie) => (
                            <option key={movie}>{movie}</option>
                        ))}
                    </select>
                    
                    <br></br>
                </label>

                <label htmlFor="apimovie">
                    Movie API Type: <br></br>
                    <select name="" id="apimovie" 
                    disabled = {apis.length === 0}
                    value={apimovie} 
                    onChange = {e => setapiMovie(e.target.value)}
                    >
                        <option />
                        {apis.map((apiM) => (
                            <option key={apiM}>{apiM}</option>
                        ))}
                    </select> */}
                <button>Submit</button>
            </form>
            {
                result?.map((s) => (
                    <Movie
                        title={s.title}
                        popularity={s.popularity}
                        key={s.id}
                    />
                ))
            }
        </div>
    )
}



export default SearchParams;