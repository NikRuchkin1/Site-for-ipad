import React from 'react'
import {connect} from 'react-redux'
import ThirdSlide from './ThirdSlide'

class ContainerThirdSlide extends React.Component {

    componentDidMount() {}
    render() {
        return (
            <ThirdSlide {...this.props}/>
        )
    }

}

const mapStateToProps = (state) => {

}

const ContThirdSlide = connect(mapStateToProps, {}) (ContainerThirdSlide)

export default ContThirdSlide