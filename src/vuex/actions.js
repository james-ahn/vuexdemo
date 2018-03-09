const addCounter = (context,payload) => {
  console.log('payload_action',payload);
  return context.commit('addCounter',10); //commit for mutations
}

export{
  addCounter
}
