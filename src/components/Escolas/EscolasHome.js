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

import escolaLobo from './img/escolaLobo.png';
import escolaGato from './img/escolaGato.png';
import escolaGrifo from './img/escolaGrifo.png';
import escolaUrso from './img/escolaUrso.png';
import escolaVibora from './img/escolaVibora.png';

const EscolasHomes = () => {
    return (
        <section id="EscolasHome">
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
                                <MDBCardImage src={escolaLobo} fluid />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="cardLobo">
                            <MDBCardTitle className="cardTitle"><br/><h3>Escola do Lobo</h3></MDBCardTitle>
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
                                <MDBCardImage src={escolaGato} fluid />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="cardGato">
                            <MDBCardTitle className="cardTitle"><br/><h3>Escola do Gato</h3></MDBCardTitle>
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
                                <MDBCardImage src={escolaGrifo} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="cardGrifo">
                            <MDBCardTitle className="cardTitle"><br/><h3>Escola do Grifo</h3></MDBCardTitle>
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
                                <MDBCardImage src={escolaUrso} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="cardUrso">
                            <MDBCardTitle className="cardTitle"><br/><h3>Escola do Urso</h3></MDBCardTitle>
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
                                <MDBCardImage src={escolaVibora} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className="cardVibora">
                            <MDBCardTitle className="cardTitle"><br/><h3>Escola do Vibora</h3></MDBCardTitle>
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
}

export default EscolasHomes;