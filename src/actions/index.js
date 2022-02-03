import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const ADD_CLASS = "ADD_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";
export const EDIT_CLASS = "EDIT_CLASS";

export const fetchClasses = () => {
  return({type: FETCH_START});
}

export const fetchFail = (error) => {
  return({type: FETCH_FAIL, payload: error});
}

export const fetchSuccess = (classes) => {
  return({type: FETCH_SUCCESS, payload: classes});
}

export const addClass = (newClass) => {
  return({type: ADD_CLASS, payload: newClass});
}

export const deleteClass = (deletingClass) => {
  return({type: DELETE_CLASS, payload: deletingClass});
}

export const editClass = (editingClass) => {
  return({type: EDIT_CLASS, payload: editingClass});
}

export const getClasses = () => (dispatch) => {
  dispatch(fetchClasses());
  axios.get('http://localhost:3000')
    .then(resp => {
      dispatch(fetchSuccess(resp.data));
    })
    .catch(err => {
      dispatch(fetchFail(err));
    })
}

export const getAddClass = (newClass) => (dispatch) => {
  dispatch(addClass(newClass));
  axios.post('http://localhost:3000')
    .then(resp => {
      dispatch(fetchClasses(resp));
    })
    .catch(err => {
      dispatch(fetchFail(err));
    })
}

export const getDeleteClass = (deletingClass) => (dispatch) => {
  dispatch(deleteClass(deletingClass));
  axios.delete('http://localhost:3000')
    .then(resp => {
      dispatch(fetchClasses(resp));
    })
    .catch(err => {
      dispatch(fetchFail(err));
    })
}

export const getEditClass = (editingClass) => (dispatch) => {
  dispatch(editClass(editingClass));
  axios.put('http://localhost:3000')
    .then(resp => {
      dispatch(fetchClasses(resp));
    })
    .catch(err => {
      dispatch(fetchFail(err));
    })
}