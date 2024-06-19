import axios from "axios"

export const api = axios.create({
    //baseURL: "http://localhost:3333"  //* dev
    baseURL: "https://ufg-organized.onrender.com"  //! prod
})