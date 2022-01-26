import axios from "axios";

const instance = axios.create({
  baseURL: "https://dapi.kakao.com/v3/search",
  headers: {'Authorization': "KakaoAK " + process.env.REACT_APP_KAKAO_REST_API_KEY }
});
  
export default instance;