import axios from 'axios';

const currentComic = (context,payload) => {

  console.log('payload_action',payload);
  let url ='http://xkcd.com/info.0.json ';

  axios.get(url)
    .then(response  =>  {
      console.log('response==>',response);
  }, e  =>  {
    console.log(e)
  })

  //return context.commit('addCounter',10); //commit for mutations
}

export{
  currentComic
}
