import { axiosInstance } from "./axios-instance";

export async function getTodos(searchTerm?: string) {
    return axiosInstance.get('/todos', {
        params: {
            searchTerm: searchTerm
        }
    })
}