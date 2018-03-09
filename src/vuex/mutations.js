const addCounter = (state,payload) => {
  //state.counter = payload;
  console.log('payload_mutation',payload);
  return state.counter++;
}

export{
  addCounter
}


