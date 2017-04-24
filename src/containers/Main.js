import React from "react";
import { render } from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getRequesterEmail, resetStore } from '../actions'

import PageOne from './PageOne'
import PageTwo from './PageTwo'

@connect(
    state => ({
        requesterEmail: state.requesterEmail,
        page: state.page,
    }),
    dispatch => ({
        ...bindActionCreators({getRequesterEmail, resetStore}, dispatch),
    })
)
export default class Main extends React.Component {

    constructor(props) {
        super(props)

        props.resetStore()
        props.getRequesterEmail()
    }

    render() {
        const { page, requesterEmail } = this.props


        if (!requesterEmail) {
            return <p>Loading, please wait...</p>
        }

        if (page === 'PageOne') {

            return (
                <PageOne />
            )

        }

        if (page === 'PageTwo') {
            return (
                <PageTwo />
            )
        }

    }
}
