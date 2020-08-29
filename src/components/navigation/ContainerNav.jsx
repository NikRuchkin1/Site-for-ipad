import React from 'react'
import Nav from './Nav'
import {connect} from 'react-redux'

class containerNav extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <Nav {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {

}

const ContNav = connect(mapStateToProps, {}) (Nav)

export default ContNav