import React from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import igni from './img/igni.png';
import aard from './img/aard.png'
import yrden from './img/yrden.png';
import axii from './img/axii.png';
import quen from './img/quen.png';

const SinaisHome = () => {
    return (
        <section id="SinaisHome">
            <MDBNavbar className="navbar">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="mx-2">
                        <Link to="/">
                            <MDBIcon fas icon="angle-left" className="mx-2" />Voltar
                        </Link>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>

            <MDBContainer className="cardSinais my-5 text-center">
                <MDBRow>
                    <MDBCol size='md py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={igni} fluid />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="cardIgni">
                                <MDBCardTitle className="cardTitle">Igni</MDBCardTitle>
                                <MDBCardText className="cardText">
                                    Incendeia objetos e adversários
                                </MDBCardText>
                                <MDBBtn color='dark' className="btnCard" href='#'>Ver mais</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={axii} fluid />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="cardAxii">
                                <MDBCardTitle className="cardTitle">Axii</MDBCardTitle>
                                <MDBCardText className="cardText">
                                    Controle da mente
                                </MDBCardText>
                                <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={aard} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="cardAard">
                                <MDBCardTitle className="cardTitle">Aard</MDBCardTitle>
                                <MDBCardText className="cardText">
                                    Onda telecinética. 
                                </MDBCardText>
                                <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="my-5 text-center">
                    <MDBCol md='2'>
                    </MDBCol>
                    <MDBCol md='4 py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={quen} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="cardQuen">
                                <MDBCardTitle className="cardTitle">Quen</MDBCardTitle>
                                <MDBCardText className="cardText">
                                    Protege contra danos físicos
                                </MDBCardText>
                                <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md='4 py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={yrden} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="cardYrden">
                                <MDBCardTitle className="cardTitle">Yrden</MDBCardTitle>
                                <MDBCardText className="cardText">
                                    Armadilha que imobiliza os inimigos
                                </MDBCardText>
                                <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </section>
    );
};

export default SinaisHome;