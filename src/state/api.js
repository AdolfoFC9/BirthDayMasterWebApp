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

export async function getPeopleMonth(payload) { //espero llamdas exteras a getPeopleMonth y recibo los parametros que me envien el payload
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:9000/people/${payload.params.month}`,  //agregamos a nuestra llamada al api el mes que recibimos en payload
            headers: {
                "Content-Type": "application/json"
            }
        });   //llamamos a nuestr API GET /people/:month enviandole como header content-type = application/jsonn y esperamos a que haya una respuesta
        if (response.status === 200) { //validamos si el estatus de response y si es 200 devolvemos un objeto que contiene people >>>>  listado de personas que cumplen en dicho month
            return { status: response.status, success: true, people: response.data };
        }
        return { status: response.status, success: false, error: "Expected result was 200" };  // de lo contrario devolvemos el status que recibamos
    } catch (error) {
        return { status: error?.response?.status || 500, success: false, error: error.message, message: error?.response?.data?.message };  //  si algo no funciono dentro del try devolvemos normalmente 500 >>> Server Error
    }
}

export async function insertPerson(payload) { //espero llamdas exteras a getPeopleMonth y recibo los parametros que me envien el payload
    try {
        const response = await axios({
            method: 'post',
            url: `http://localhost:9000/person/`,  //agregamos a nuestra llamada al api el mes que recibimos en payload
            headers: {
                "Content-Type": "application/json"
            },
            data: payload.person
        });   //llamamos a nuestr API GET /people/:month enviandole como header content-type = application/jsonn y esperamos a que haya una respuesta
        if (response.status === 200) { //validamos si el estatus de response y si es 200 devolvemos un objeto que contiene people >>>>  listado de personas que cumplen en dicho month
            return { status: response.status, success: true, person: response.data };
        }
        return { status: response.status, success: false, error: "Expected result was 200" };  // de lo contrario devolvemos el status que recibamos
    } catch (error) {
        return { status: error?.response?.status || 500, success: false, error: error.message, message: error?.response?.data?.message };  //  si algo no funciono dentro del try devolvemos normalmente 500 >>> Server Error
    }
}

export async function updatePerson(payload) { //espero llamdas exteras a getPeopleMonth y recibo los parametros que me envien el payload
    try {
        const response = await axios({
            method: 'put',
            url: `http://localhost:9000/person/${payload.person.identificador}`,  //agregamos a nuestra llamada al api el mes que recibimos en payload
            headers: {
                "Content-Type": "application/json"
            },
            data: payload.person
        });   //llamamos a nuestr API GET /people/:month enviandole como header content-type = application/jsonn y esperamos a que haya una respuesta
        if (response.status === 200) { //validamos si el estatus de response y si es 200 devolvemos un objeto que contiene people >>>>  listado de personas que cumplen en dicho month
            return { status: response.status, success: true, person: response.data };
        }
        return { status: response.status, success: false, error: "Expected result was 200" };  // de lo contrario devolvemos el status que recibamos
    } catch (error) {
        return { status: error?.response?.status || 500, success: false, error: error.message, message: error?.response?.data?.message };  //  si algo no funciono dentro del try devolvemos normalmente 500 >>> Server Error
    }
}
export async function deletePerson(payload) { //espero llamdas exteras a getPeopleMonth y recibo los parametros que me envien el payload

    try {
        const response = await axios({
            method: 'delete',
            url: `http://localhost:9000/person/${payload.identificador}`,  //agregamos a nuestra llamada al api el mes que recibimos en payload
            headers: {
                "Content-Type": "application/json"
            }
        });   //llamamos a nuestr API GET /people/:month enviandole como header content-type = application/jsonn y esperamos a que haya una respuesta
        if (response.status === 204) { //validamos si el estatus de response y si es 200 devolvemos un objeto que contiene people >>>>  listado de personas que cumplen en dicho month
            return { status: response.status, success: true, identificador: payload.identificador};
        }
        return { status: response.status, success: false, error: "Expected result was 204" };  // de lo contrario devolvemos el status que recibamos
    } catch (error) {
        return { status: error?.response?.status || 500, success: false, error: error.message, message: error?.response?.data?.message };  //  si algo no funciono dentro del try devolvemos normalmente 500 >>> Server Error
    }
}