import axios from 'axios';

// Comics
const currentComicAction = (context,payload) => {
  let url ='http://xkcd.com/info.0.json ';
  axiosApi(context,url,true);
}
const preComicAction = (context,payload) => {
  let url ='http://xkcd.com/'+payload+'/info.0.json';
  axiosApi(context,url,true);
}
const afterComicAction = (context,payload) => {
  let url ='http://xkcd.com/'+payload+'/info.0.json';
  axiosApi(context,url,true);
}

// Itunes
const searchItunesAction = (context,payload) => {
  let url ='https://itunes.apple.com/search?term='+payload.name+'&country='+payload.country+'&entity=musicVideo&limit=10';
  axiosApi(context,url,false);
}

const axiosApi = (context,url,flag) => {
  axios.get(url)
    .then(response  =>  {
      console.log('response=>',response);
      if(flag){
        return context.commit('currentComicMutation',response); //commit for mutations
      }else{
        return context.commit('ituensMutation',response); //commit for mutations
      }
  }, e  =>  {
    throw e
  })
}


export{
  currentComicAction,
  preComicAction,
  afterComicAction,
  searchItunesAction
}
