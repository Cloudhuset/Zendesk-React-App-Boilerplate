import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { getClients, setAppHeight, changePage, openClient } from '../../actions'
import CopyToClipboard from 'react-copy-to-clipboard'
import styles from './style.css'

@connect(
    state => ({
        requesterEmail: state.requesterEmail,
    }),
    dispatch => ({
        ...bindActionCreators({getClients, changePage, openClient}, dispatch),
        setAppHeight,
    })
)
@CSSModules(styles)
export default class PageOne extends React.Component {

    componentDidUpdate() {
        const height = document.getElementById('app').clientHeight
        this.props.setAppHeight(height)
    }

    render() {
        const { requesterEmail } = this.props

        return (
            <div>
                <p>This is page one.</p>

                <a style={{marginTop: '20px', display: 'inline-block'}} href="#" onClick={() => this.props.changePage('PageTwo')}>Go to page two</a>
            </div>
        )

    }

}
