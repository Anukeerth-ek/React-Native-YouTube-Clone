import axios from 'axios';
import { rapidApiKey } from '../constants';


export  const fetchTrendingVideo = async (params)=> {
    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/trending',
        params: {
          geo: 'US',
          type: 'now',
          lang: 'en',
          ...params
        },
        headers: {
          'X-RapidAPI-Key': "f19b8ca4e4msh21731cb0b4b6ba1p18a59djsnf28748692450",
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        console.log("response", response.data.data)
        return response.data.data
      }
       catch(error) {
        console.log("error", error)
        return [];
       }
   
}
