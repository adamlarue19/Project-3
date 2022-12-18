import axios from "axios";
import React from "react";
import { useState } from 'react';


 export const apiCall = async (muscle) => {
   // const options = {
   //   method: 'GET',
   //   headers: {
   //     'X-RapidAPI-Key': '4abe4a0781msh9f300002fb38b8ap1ac971jsnd6b5e73499a4',
   //     'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
   //   }
   // };

   // await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options)
   //   setResults(await response.json())
   //   .then(response => console.log(response))
   //   .catch(err => console.error(err));

   console.log(muscle);

   const options = {
     method: "GET",
     url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
     params: { muscle: muscle },
     headers: {
       "X-RapidAPI-Key": "4abe4a0781msh9f300002fb38b8ap1ac971jsnd6b5e73499a4",
       "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
     },
   };
   try {
     const data = await axios.request(options);
     return data;
   } catch (err) {
     console.log(err);
   }
  
 }

// apiCall('biceps')