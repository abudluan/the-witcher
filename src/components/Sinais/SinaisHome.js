import React from "react";
import {
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBFooter
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import './SinaisHome.scss';

import Footer from "../Footer/Footer";

import igni from '../imagens/Sinais/igni.png';
import aard from '../imagens/Sinais/aard.png'
import yrden from '../imagens/Sinais/yrden.png';
import axii from '../imagens/Sinais/axii.png';
import quen from '../imagens/Sinais/quen.png';

const SinaisHome = () => {
    return (
        <section id="SinaisHome">
           <div className="title">
                <h2 className="text-page">Escolas</h2>
            </div>

            <div className="btn-back">
               
                <Link as={Link} to="/" ><MDBBtn color="dark"><MDBIcon  fas icon="angle-left" /> Voltar</MDBBtn></Link>
            </div>

            <MDBContainer className="cardSinais my-5 text-center">
                <MDBRow>
                    <MDBCol size='md py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={igni} fluid />

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>

                            </MDBRipple>
                            <MDBCardBody className="cardIgni">
                                <MDBCardTitle className="cardTitle"><br /><h3>Igni</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br />
                                </MDBCardText>
                                <Link to="/Igni">
                                    <MDBBtn color='dark' className="btnCard">Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={axii} fluid />

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>

                            </MDBRipple>
                            <MDBCardBody className="cardAxii">
                                <MDBCardTitle className="cardTitle"><br /><h3>Axii</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br />
                                </MDBCardText>
                                <Link to="/Axii">
                                    <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={aard} fluid alt='...' />

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>

                            </MDBRipple>
                            <MDBCardBody className="cardAard">
                                <MDBCardTitle className="cardTitle"><br /><h3>Aard</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br />
                                </MDBCardText>
                                <Link to="/Aard">
                                    <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="text-center">
                    <MDBCol md='2'>
                    </MDBCol>
                    <MDBCol md='4 py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={quen} fluid alt='...' />

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>

                            </MDBRipple>
                            <MDBCardBody className="cardQuen">
                                <MDBCardTitle className="cardTitle"><br /><h3>Quen</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br />
                                </MDBCardText>
                                <Link to="/Quen">
                                    <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md='4 py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={yrden} fluid alt='...' />

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>

                            </MDBRipple>
                            <MDBCardBody className="cardYrden">
                                <MDBCardTitle className="cardTitle"><br /><h3>Yrden</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br />
                                </MDBCardText>
                                <Link to="/Yrden">
                                    <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>

            </MDBContainer>

            <Footer />

        </section>
    );
};

export default SinaisHome;