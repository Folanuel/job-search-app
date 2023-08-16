import {useEffect, useState} from 'react'
import axios from 'axios'
//import { RAPID_API_KEY } from '@env'


// const rapidApiKey = RAPID_API_KEY


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'c3a1560f53msh9bd68c12f405da9p177615jsn68505109d028',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(!false);

        try{
            const response = await axios.request(options);

            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error);
            alert('There is an error');
        } finally {
            setIsLoading(false);
        }
    }



    useEffect(() => {
        fetchData();          
    }, []);

    const refetch = () => {
        setIsLoading(!false)
        fetchData();
    }

    return {data, isLoading, error, refetch};
}


export default useFetch;