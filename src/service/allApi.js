import { BaseUrl } from "./base_url";

import { commonApi } from "./commonApi";



// add student

export const newStudent = async(body,header)=>{

    return await commonApi("POST",`${BaseUrl}/add/student`,body,header)


}

// get all

export const getStudents = async(search)=>{
    return await commonApi("GET",`${BaseUrl}/get/students?search=${search}`,"")
}

// edit student details

export const editStudent = async(id,body)=>{

    return await commonApi("PUT",`${BaseUrl}/edit/${id}`,body)

}


// remove student

export const removeStudent =async(id)=>{
    return await commonApi("DELETE",`${BaseUrl}/remove/${id}`)
}


// register

export const register = async(body)=>{
    return await commonApi("POST",`${BaseUrl}/register`,body)
}


// log in 
export const login = async (body)=>{
    return await commonApi("POST",`${BaseUrl}/login`,body)
}



