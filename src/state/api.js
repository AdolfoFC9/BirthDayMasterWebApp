import axios from "axios";

export async function getPeople() {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:9000/people',
            headers: {
                "Content-Type": "application/json"
            }
        });   
        if (response.status === 200) {
            return { status: response.status, success: true, people: response.data };
        }
        return { status: response.status, success: false, error: "Expected result was 200" };
    } catch (error) {
        return { status: error?.response?.status || 500, success: false, error: error.message, message: error?.response?.data?.message };
    }
}

export async function getPeopleMonth(payload) { 
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:9000/people/${payload.params.month}`,  
            headers: {
                "Content-Type": "application/json"
            }
        });   
        if (response.status === 200) { 
            return { status: response.status, success: true, people: response.data };
        }
        return { status: response.status, success: false, error: "Expected result was 200" };  
    } catch (error) {
        return { status: error?.response?.status || 500, success: false, error: error.message, message: error?.response?.data?.message };  
    }
}

export async function insertPerson(payload) { 
    try {
        const response = await axios({
            method: 'post',
            url: `http://localhost:9000/person/`,  
            headers: {
                "Content-Type": "application/json"
            },
            data: payload.person
        });   
        if (response.status === 200) { 
            return { status: response.status, success: true, person: response.data };
        }
        return { status: response.status, success: false, error: "Expected result was 200" };  
    } catch (error) {
        return { status: error?.response?.status || 500, success: false, error: error.message, message: error?.response?.data?.message };  
    }
}

export async function updatePerson(payload) { 
    try {
        const response = await axios({
            method: 'put',
            url: `http://localhost:9000/person/${payload.person.identificador}`,  
            headers: {
                "Content-Type": "application/json"
            },
            data: payload.person
        });   
        if (response.status === 200) {
            return { status: response.status, success: true, person: response.data };
        }
        return { status: response.status, success: false, error: "Expected result was 200" };  
    } catch (error) {
        return { status: error?.response?.status || 500, success: false, error: error.message, message: error?.response?.data?.message };  
    }
}
export async function deletePerson(payload) { 

    try {
        const response = await axios({
            method: 'delete',
            url: `http://localhost:9000/person/${payload.identificador}`,  
            headers: {
                "Content-Type": "application/json"
            }
        });   
        if (response.status === 204) { 
            return { status: response.status, success: true, identificador: payload.identificador};
        }
        return { status: response.status, success: false, error: "Expected result was 204" };  
    } catch (error) {
        return { status: error?.response?.status || 500, success: false, error: error.message, message: error?.response?.data?.message };  
    }
}