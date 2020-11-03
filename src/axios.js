//importing axios
import axios from "axios";

//BaseUrl to make requests to the movie database..

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

//to append anything in the baseURL we have get() from axios in the instance.
//e.g.instance.get('/foo');

//using instance outside of the file.
export default instance;
