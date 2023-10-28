import axios from "axios";

export const get_movie = (param)=>{
    return axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=ba3c60e5&type=movie&s=${param}`)
}