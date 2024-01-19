import axios from 'axios'

const URI = 'http://localhost:3200'

export const getFarmers = async () => {
    try {
        const storedToken = localStorage.getItem('token')
        const config = {
            headers: {
                Authorization : storedToken ? `Bearer ${JSON.parse(storedToken)}` : '',
            }
        }
        return await axios.get(`${URI}/api/farmer/get-farmer`, config)
    } catch (error) {
        console.log('Error', error);
        
    }
}

export const getSingleFarmer =async (params:any) => {
    try {
        const storedToken = localStorage.getItem('token')
        const config = {
            headers: {
                Authorization : storedToken ? `Bearer ${JSON.parse(storedToken)}` : '',
            }
        }
        return await axios.get(`${URI}/api/farmer/get-farmer/${params}`, config)
    } catch (error) {
        console.log(error); 
    }
}

export const generateOtp =async (data:any) => {
    const storedToken = localStorage.getItem('token')
    try {
        return await axios.post(`${URI}/api/user/generateOTP`, data)
    } catch (error) {
        console.log(error);       
    }
}

export const signIn = async(data: any) => {
    console.log(data);
    
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
            }
        }
        const result = await axios.post(`${URI}/api/user/verifyOTP`, data, config)
        return result.data;
    } catch (error) {
        console.log('Error while calling signin api', error);
    }
}
