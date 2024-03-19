
// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
// https://qtify-backend-labs.crio.do/album/:slug
// https://qtify-backend-labs.crio.do/songs
// https://qtify-backend-labs.crio.do/faq
// https://qtify-backend-labs.crio.do/genres


import axios from "axios";
export const  BACK_ENDPOINT ="https://qtify-backend-labs.crio.do"; 

export const fetchTopAlbums =async()=>{
    try{
        const responce=await axios.get(`${BACK_ENDPOINT}/albums/top`);
        return responce.data;
    }
    catch(e){
        console.log(e);
    }
};
export const fetchNewAlbums =async()=>{
    try{
        const responce=await axios.get(`${BACK_ENDPOINT}/albums/new`);
        return responce.data;
    }
    catch(e){
        console.log(e);
    }
};
export const fetchSOngs =async()=>{
    try{
        const responce=await axios.get(`${BACK_ENDPOINT}/albums/songs`);
        return responce.data;
    }
    catch(e){
        console.log(e);
    }
};