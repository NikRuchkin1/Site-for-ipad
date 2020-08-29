import React from 'react'
import {connect} from 'react-redux'
import SecondSlide from './SecondSlide'

class ContainerSecondSlide extends React.Component {

    componentDidMount() {}
    render() {
        return (
            <SecondSlide {...this.props}/>
        )
    }

}

const mapStateToProps = (state) => {

}

const ContSecondSlide = connect(mapStateToProps, {}) (ContainerSecondSlide)

export default ContSecondSlide