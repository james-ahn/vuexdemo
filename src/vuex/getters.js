const getCurrentComic = state => {
  return [state]; //make Json to Arrary
}
const getItunesData = state => {
  return state.ituensData;
}
const getFlagData = state => {
  return state.flag;
}
export{
  getCurrentComic,
  getItunesData,
  getFlagData
}
