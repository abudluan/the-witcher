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

import igni from '../imagens/Sinais/igni.png';
import aard from '../imagens/Sinais/aard.png'
import yrden from '../imagens/Sinais/yrden.png';
import axii from '../imagens/Sinais/axii.png';
import quen from '../imagens/Sinais/quen.png';

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
                            <MDBCardTitle className="cardTitle"><br/><h3>Igni</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br/>
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
                            <MDBCardTitle className="cardTitle"><br/><h3>Axii</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br/>
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
                            <MDBCardTitle className="cardTitle"><br/><h3>Aard</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br/>
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
                            <MDBCardTitle className="cardTitle"><br/><h3>Quen</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br/>
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
                            <MDBCardTitle className="cardTitle"><br/><h3>Yrden</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br/>
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