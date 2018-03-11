const currentComicMutation = (state,payload) => {
  state.title = payload.data.title;
  state.alt= payload.data.alt;
  state.img= payload.data.img;
  state.year= payload.data.year;
  state.month= payload.data.month;
  state.day= payload.data.day;
  state.num= payload.data.num;
}

export{
  currentComicMutation
}


