import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changePage, setAppHeight, saveRequesterEmailOnClient } from '../../actions'

@connect(
    state => ({

    }),
    dispatch => ({
        ...bindActionCreators({changePage, saveRequesterEmailOnClient}, dispatch),
        setAppHeight,
    })
)
export default class OtherPage extends React.Component {

    componentDidMount() {
        const height = document.getElementById('app').clientHeight
        this.props.setAppHeight(height)
    }

    render() {
        return(
            <div>
                <p>This is another page</p>

                <a style={{marginTop: '20px', display: 'block'}} href="#" onClick={() => this.props.changePage('PageOne')}>Go back</a>
            </div>
        )
    }
}
