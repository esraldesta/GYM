import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:8000/api/';

let refresh = false;

axios.defaults.baseURL = 'http://localhost:8000';

if(localStorage.getItem('access_token')){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
}


axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401 && !refresh) {
        console.log("axios.defaults.headers.common['Authorization']",axios.defaults.headers.common['Authorization']);
        refresh = true;

        console.log(error)
        const response = await axios.post('http://localhost:8000/token/refresh/', {
            refresh:localStorage.getItem('refresh_token')
        }, {
            headers: {
              'Content-Type': 'application/json',
            }
          },{withCredentials: true});

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            return axios(error.config);
        }
    }
    refresh = false;
    return error;
});


axios.interceptors.request.use(request=>{
    // console.log(request);
    // request.headers.DeveloperName = "esral"

    return request
})

axios.interceptors.response.use(response=>{
    // console.log(response);

    return response;
})
