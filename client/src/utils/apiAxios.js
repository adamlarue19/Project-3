import axios from "axios";
export const apiCall = (muscle) => {


const options = {
  method: 'GET',
  url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
  params: {muscle: muscle},
  headers: {
    'X-RapidAPI-Key': '4abe4a0781msh9f300002fb38b8ap1ac971jsnd6b5e73499a4',
    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}




