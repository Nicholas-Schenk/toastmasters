import axios from 'axios';

const baseAPI = axios.create({baseURL:'https://nick-toastmasters-app.herokuapp.com//'})
const url = 'https://nick-toastmasters-app.herokuapp.com//speech';
const url2 = 'https://nick-toastmasters-app.herokuapp.com//deletespeech'
const url3 = 'https://nick-toastmasters-app.herokuapp.com//timer'
const url4 = 'https://nick-toastmasters-app.herokuapp.com//commentcard'
const url5 = 'https://nick-toastmasters-app.herokuapp.com//evaluation'
const url6 = 'https://nick-toastmasters-app.herokuapp.com//ahcounter'
const url7 = 'https://nick-toastmasters-app.herokuapp.com//signup'
const url8 = 'https://nick-toastmasters-app.herokuapp.com//pages'
//const url8 = 'https://nick-toastmasters-app.herokuapp.com//users/signin'
//const url9 = 'https://nick-toastmasters-app.herokuapp.com//users/signup'
//export const fetchSpeech = (date) => axios.get(url)
export const fetchSpeech2 = async (date) => {
    let theData = []
    await axios.post('https://nick-toastmasters-app.herokuapp.com//speech/test', date).then((response) => {
    theData = response.data
  }, (error) => {
    console.log(error);
  });
  return theData
}

export const fetchEvaluation = async (date) => {
  let theData = []
  await axios.post('https://nick-toastmasters-app.herokuapp.com//evaluation/get', date).then((response) => {
  theData = response.data
}, (error) => {
  console.log(error);
});
return theData
}

export const getAllUsers = async (club) => {
  let theData = []
  await axios.post('https://nick-toastmasters-app.herokuapp.com//user/getUser', club).then((response) => {
  theData = response.data
}, (error) => {
  console.log(error);
});
console.log(theData);
return theData
}
export const setTime = async (data) => {
  let theData = []
  await axios.post(url3, data).then((response) => {
  theData = response.data
}, (error) => {
  console.log(error);
});
console.log("the data is " + theData);
return theData
}

export const postAhCounter = async (data) => {
  let theData = []
  await axios.post(url6, data).then((response) => {
  theData = response.data
}, (error) => {
  console.log(error);
});
console.log("the data for ah " + theData);
return theData
}

export const createSpeech = (newSpeech) => axios.post(url, newSpeech)
export const deleteSpeech = (speech) =>axios.post(url2, speech)
export const fetchPages = () =>axios.get(url8);
export const createPages = (newPage) =>axios.post(url8, newPage)


//export const fetchPage=() =>baseAPI.get('/');
//export const fetchPostsBySearch =(searchQuery) => baseAPI.get(`/search?searchQuery=${searchQuery.search || 'none'}`)
//export const setTime = (data) => axios.post(url3, data)
export const fetchPage=() =>baseAPI.get('/');
export const fetchPostsBySearch =(searchQuery) => baseAPI.get(`/search?searchQuery=${searchQuery.search || 'none'}`)
//export const setTime = (data) => axios.post(url3, data)
export const addCommentCards = (data) => axios.post(url4, data)
export const createEvaluation = (data) => axios.post(url5, data)
//export const postAhCounter = (data) => axios.post(url6, data)
export const createUser = (data) => axios.post(url7, data)
export const changeUserRole = (data) => axios.post('https://nick-toastmasters-app.herokuapp.com//user/changeUserRole', data)
export const removeUserClub = (data) => axios.post('https://nick-toastmasters-app.herokuapp.com//user/removeUserClub', data)
//export const AUTH='AUTH';
//export const LOGOUT='LOGOUT';
export const signIn=(formData)=>baseAPI.post('/users/signin', formData).then((response) => {
  const theData = response
  return theData
}, (error) => {
  console.log(error);
});;
export const signUp=(formData)=>baseAPI.post('/users/signup', formData).then((response) => {
  //const theData = response.status
  const theData = response
  return theData
}, (error) => {
  //this error function is called upon an error in the post. however it doesn't retain the data, just that an error happened. you can see this by console logging the error and seeing that its just blank
  console.log(error)
  return {status: 400, data: {message: 'Could Not Sign Up :('}};
});;
export const changePassword=(formData)=>baseAPI.post('/users/changePassword', formData).then((response) => {
  const theData = response.status
  return theData
}, (error) => {
  console.log(error);
});;

//export const signIn=(data)=>axios.post(url8, data);
//export const signUp=(data)=>axios.post(url9, data);

