import axios from "axios"

export const api = axios.create({
    //baseURL: "http://localhost:3333"  //* dev
    baseURL: "https://ufg-organized.onrender.com"  //! prod
})

// Se for rodar na máquina, descomente a primeira baseURL e comente a segunda