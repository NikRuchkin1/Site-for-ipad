import React from 'react'
import FirstSlide from './FirstSlide'
import {connect} from 'react-redux'

class containerFirstSlide extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <FirstSlide {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {

}

const ContFirstSlide = connect(mapStateToProps, {}) (containerFirstSlide)

export default ContFirstSlide