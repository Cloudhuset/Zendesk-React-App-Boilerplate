import { actions } from './actions'

const initialState = {
    requesterEmail: null,
    page: 'PageOne',
    pageData: {},
}

const rootReducer = (state = initialState, action) => {

    if (action.type === actions.RESET_STORE) {
        state = undefined
    }

    return reducer(state, action)
}

const reducer = (state = initialState, action) => {

    if (action.type === actions.SET_REQUESTER_EMAIL) {
        return {
            ...state,
            requesterEmail: action.email,
        }
    }

    if (action.type === actions.CHANGE_PAGE) {
        return {
            ...state,
            page: action.page,
            pageData: action.data,
        }
    }

    return state

}

export default rootReducer
