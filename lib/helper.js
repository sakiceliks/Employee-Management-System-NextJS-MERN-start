import { func } from "prop-types";

const BASE_URL = `http://localhost:3000`

export const getUsers = async()=>{
    const response = await fetch(`${BASE_URL}/api/users`)
    const json = await response.json()

    return json;
}

export const getUser = async(userId)=>{
    const response = await fetch(`${BASE_URL}api/users/${userId}`);
    const json = await response.json();

    if(json) return json;
    return{}
}


export async function addUser(formData){
    try{
        const Options={
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}api/users`,Options)
        const json = await response.json()

        return json;

    }catch(error){
        return error;
    }
}




export async function updateUser(userId,formData){
    try{
        const Options={
            method:'PUT',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}api/users/${userId}`,Options)
        const json = await response.json()

        return json;

    }catch(error){
        return error;
    }
}




export async function deleteUser(userId){
    try{
        const Options={
            method:'DELETE',
            headers:{'Content-Type':"application/json"},
        }
        const response = await fetch(`${BASE_URL}api/users/${userId}`,Options)
        const json = await response.json()

        return json;

    }catch(error){
        return error;
    }
}


export const getCompanys = async()=>{
    const response = await fetch(`${BASE_URL}/api/companys`)
    const json = await response.json()

    return json;
}

export const getCompany = async(companyId)=>{
    const response = await fetch(`${BASE_URL}api/companys/${companyId}`);
    const json = await response.json();

    if(json) return json;
    return{}
}


export async function addCompany(formData){
    try{
        const Options={
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}api/companys`,Options)
        const json = await response.json()

        return json;

    }catch(error){
        return error;
    }
}




export async function updateCompany(companyId,formData){
    try{
        const Options={
            method:'PUT',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}api/companys/${companyId}`,Options)
        const json = await response.json()

        return json;

    }catch(error){
        return error;
    }
}




export async function deleteCompany(companyId){
    try{
        const Options={
            method:'DELETE',
            headers:{'Content-Type':"application/json"},
        }
        const response = await fetch(`${BASE_URL}api/companys/${companyId}`,Options)
        const json = await response.json()

        return json;

    }catch(error){
        return error;
    }
}
