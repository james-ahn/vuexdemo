import Vue from 'vue'

const currentComicMutation = (state,payload) => {
  state.title = payload.data.title;
  state.alt= payload.data.alt;
  state.img= payload.data.img;
  state.year= payload.data.year;
  state.month= payload.data.month;
  state.day= payload.data.day;
  state.num= payload.data.num;
}

const ituensMutation = (state,payload) => {
  if(payload.data.results.length == 0){
    for(let i in state.ituensData){
      Vue.delete(state.ituensData, i, '')
    }
    state.flag = false; //confirm the existing data
  }else{
    for(let i in payload.data.results){
      Vue.set(state.ituensData, i, payload.data.results[i]) //will trigger state updates in the reactivity system
    }
    state.flag = true;
  }
}
export{
  currentComicMutation,
  ituensMutation
}
