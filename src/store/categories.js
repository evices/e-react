import axios from "axios";
let initialState = {
    Categories: [
   
  ],
  ActiveCategory: [],
  choosedCategory: {
    
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "getCategories":
      console.log('action.payload', action.payload);
      console.log('state', state);
      return { ...state, Categories: action.payload };
    // assume receives category in the payload when choosing the category in the main page of the app
    case "filterCategories":
      return {
        ...state,
        ActiveCategory: state.Categories.filter((category) => {
          return category.category === action.payload;
        }),
      };
    case "getSingleCategory":
      console.log(action,"<<<<<<<<<<");
      return { ...state, choosedCategory: action.payload };
    default:
      return state;
  }
};

let url = "https://evices-react.herokuapp.com";
export const getAllApiCategories = () => (dispatch) => {
  return axios.get(`${url}/category`).then((data) => {
    console.log('34', data);
    dispatch(getCategories(data.data));
  });
};
export const getSingleApiCategory= (id) => (dispatch) => {
  return axios.get(`${url}/category/${id}`).then((data) => {
    console.log(data, ">>>>>>>>>>>>>>>>>>>>>>>>");
    dispatch(getSingleCategory(data.data[0]));
  });
};
export const getCategories = (categories) => {
  return {
    type: "getCategories",
    payload: categories,
  };
};

export const getSingleCategory = (category) => {
  return {
    type: "getSingleCategory",
    payload: category,
  };
};
