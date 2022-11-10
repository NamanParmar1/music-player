import axios from "axios"; 


const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientID = "beb9195afae64abbb43d6ee49dd8a626";
const redirectUrl = "http://localhost:3000";
const scope = ["user-library-read","playlist-read-private"];

export const loginEndPoint = `${authEndPoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join("%20")}
&response_type=token&show_dialog=true`;

export const trial = "https://accounts.spotify.com/en/login?continue=https://accounts.spotify.com/authorize?scope=user-library-read+playlist-read-private&response_type=token&redirect_uri=http://localhost/3000&client_id=beb9195afae64abbb43d6ee49dd8a626&show_dialog=true";

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};
 
export default apiClient;
