import ZAFClient from './misc/ZAFClient'

export const actions = {
    SET_REQUESTER_EMAIL: 'SET_REQUESTER_EMAIL',
    CHANGE_PAGE: 'CHANGE_PAGE',
    RESET_STORE: 'RESET_STORE',
}

export const getRequesterEmail = () => dispatch => {
    ZAFClient.get('ticket.requester.email').then(function(data) {
        const email = data['ticket.requester.email']

        dispatch({
            type: actions.SET_REQUESTER_EMAIL,
            email,
        })
    })
}

export const setAppHeight = height => {
    ZAFClient.invoke('resize', { width: '100%', height: (height) + 'px' });
}

export const changePage = (page, data = {}) => ({
    type: actions.CHANGE_PAGE,
    page,
    data,
})

export const resetStore = () => ({
    type: actions.RESET_STORE,
})
