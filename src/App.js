import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ContFirstSlide from './components/firstSlide/ContainerFirstSlide'
import { Container } from 'react-bootstrap';
import ContSecondSlide from './components/secondSlide/ContainerSecondSlide'
import Nav from './components/navigation/Nav'
import ContThirdSlide from './components/thirdSlide/ContainerThirdSlide'
import SLider from './components/thirdSlideStyle2/ContainerSlider';



function App(props) {


let lastScrollTop = 0;
window.onscroll = onScroll;
function onScroll (e) {
    let top = window.pageYOffset;
    if (lastScrollTop > top) {
        console.log('top');
    } else if (lastScrollTop < top) {
        console.log('down');
    }
    lastScrollTop = top;
}

  return (
    <div className='App'>
      <div className='main' id='main'>
        <Container fluid>
              <Nav/>
              <ContFirstSlide id="1"/>
              <ContSecondSlide id="2"/>
              <SLider/>
        </Container>
      </div>
    </div>
  );
}

export default App;
