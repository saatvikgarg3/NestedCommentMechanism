import { makeRequest } from "./makeRequest";

export function getPosts(){
    return makeRequest("/posts")
}

export function getpost(id){
    return makeRequest(`/posts/${id}`)
}