import {
    CHANGE_SEARCH_FIELD,
    REQUSET_ROBOTS_FAILED,
    REQUSET_ROBOTS_PENDING,
    REQUSET_ROBOTS_SUCCESS
} from './constants.js'

const initalStateSearch = {
    searchField: ''

}

export const searchRobots = (state = initalStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initalStateRobots = {
    isPending:false,
    robots:[],
    error:''
}
export const requestRobots = (state = initalStateRobots, action = {}) => {
    switch (action.type) {
        case REQUSET_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUSET_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUSET_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}
