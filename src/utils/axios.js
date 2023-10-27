import Axios from "axios"

const axios = Axios.create({
    baseURL: "https://www.omdbapi.com/?apikey=ba3c60e5&t=John%20Wick&y=2014&plot=full&fbclid=IwAR3SC1eZr-nIl5gDwO4KJ720_F9He_mWI4L9nPLXuq2wWbccrxQ2qI4gckg",
    headers:{
        "Content-Type": "application/json",
    }
})

export default axios;