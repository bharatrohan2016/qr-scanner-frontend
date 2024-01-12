import axios from 'axios'

const URI = 'http://localhost:3200'

export const getFarmers = async () => {
    try {
        return await axios.get(`${URI}/api/farmer/get-farmer`)
    } catch (error) {
        console.log('Error', error);
        
    }
}

export const getSingleFarmer =async (params:any) => {
    try {
        return await axios.get(`${URI}/api/farmer/get-farmer/${params}`)
    } catch (error) {
        console.log(error); 
    }
}