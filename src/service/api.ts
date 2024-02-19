import axios from 'axios'

const URI = 'https://barcodebackend.bharatrohan.in'

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

export const signIn =async (data:any) => {
    try {
        return await axios.post(`${URI}/api/second-user/create-user`, data)
    } catch (error) {
        console.log(error);
        
    }   
}
