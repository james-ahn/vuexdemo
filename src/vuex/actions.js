import axios from 'axios';

const currentComicAction = (context,payload) => {
  let url ='http://xkcd.com/info.0.json ';
  axiosApi(context,url);
}

const preComicAction = (context,payload) => {
  let url ='http://xkcd.com/'+payload+'/info.0.json';
  axiosApi(context,url);
}


const afterComicAction = (context,payload) => {
  let url ='http://xkcd.com/'+payload+'/info.0.json';
  axiosApi(context,url);
}


const axiosApi = (context,url) => {
  axios.get(url)
    .then(response  =>  {
    return context.commit('currentComicMutation',response); //commit for mutations
  }, e  =>  {
    console.log(e)
  })
}


export{
  currentComicAction,
  preComicAction,
  afterComicAction
}
