import axios, { AxiosError } from "axios";

const apiClient = {
     endpoint: 'http://localhost:4000/api/',

    config: {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')  || ''
        }
    },

    setToken: (token: string) => {
        apiClient.config.headers.Authorization = 'Bearer ' + token;
        localStorage.setItem('token', token) 
    },

    uploadImage: async (file: any) => {
        const photoData = new FormData();
        photoData.append('file', file);
        const response = await axios.post(apiClient.endpoint + 'images', photoData, {
            headers: {
                ...apiClient.config.headers,
                'Content-type': 'multipart/form-data'
            }
        })
        console.log(response.data.imageLink);
        return response.data.imageLink
    },

    isAuthorised: async (): Promise<boolean> => {
        try {
            const response = await axios.get(apiClient.endpoint + 'users', apiClient.config)
            return response.status < 400 
        } catch(e) {
            return false
        }
    },

    

    get: (url: string) => {
        return axios.get(apiClient.endpoint + url, apiClient.config)
    },

    post: (url: string, data: any) => {
        return axios.post(apiClient.endpoint + url, data ,apiClient.config)
    },

    put: (url: string, data: any) => {
        return axios.put(apiClient.endpoint + url, data ,apiClient.config)
    },

    delete: (url: string) => {
        return axios.delete(apiClient.endpoint + url, apiClient.config)
    }
}

export default apiClient;