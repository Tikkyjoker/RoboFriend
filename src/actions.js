import {
    CHANGE_SEARCH_FIELD,
    REQUSET_ROBOTS_FAILED,
    REQUSET_ROBOTS_PENDING,
    REQUSET_ROBOTS_SUCCESS
} from './constants.js'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUSET_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUSET_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUSET_ROBOTS_FAILED, payload: error }))
}