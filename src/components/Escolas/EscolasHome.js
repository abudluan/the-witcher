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
    MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './EscolasHome.scss';

import escolaLobo from '../imagens/Escolas/escolaLobo.png';
import escolaGato from '../imagens/Escolas/escolaGato.png';
import escolaGrifo from '../imagens/Escolas/escolaGrifo.png';
import escolaUrso from '../imagens/Escolas/escolaUrso.png';
import escolaVibora from '../imagens/Escolas/escolaVibora.png';

const EscolasHomes = () => {
    return (
        <section id="EscolasHome">
            <div className="navbar">
                <div>
                    <Link as={Link} to="/" className="btn-back"><MDBIcon fas icon="angle-left" /> Voltar</Link>
                </div>
                <h2 className="text-page">Escolas</h2>
            </div>

            <MDBContainer className="cardSinais my-5 text-center">
                <MDBRow>
                    <MDBCol size='md py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={escolaLobo} fluid />

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>

                            </MDBRipple>
                            <MDBCardBody className="cardLobo">
                                <MDBCardTitle className="cardTitle"><br /><h3>Escola do Lobo</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br />
                                </MDBCardText>
                                <Link to="/Lobo">
                                    <MDBBtn color='dark' className="btnCard" href='#'>Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={escolaGato} fluid />

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>

                            </MDBRipple>
                            <MDBCardBody className="cardGato">
                                <MDBCardTitle className="cardTitle"><br /><h3>Escola do Gato</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br />
                                </MDBCardText>
                                <Link to="/Gato">
                                    <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={escolaUrso} fluid alt='...' />

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>

                            </MDBRipple>
                            <MDBCardBody className="cardUrso">
                                <MDBCardTitle className="cardTitle"><br /><h3>Escola do Urso</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br />
                                </MDBCardText>
                                <Link to="/Urso">
                                    <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                                </Link>
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
                                <MDBCardImage src={escolaGrifo} fluid alt='...' />

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>

                            </MDBRipple>
                            <MDBCardBody className="cardGrifo">
                                <MDBCardTitle className="cardTitle"><br /><h3>Escola do Grifo</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br />
                                </MDBCardText>
                                <Link to="/Grifo">
                                    <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>



                    <MDBCol md='4 py-2'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={escolaVibora} fluid alt='...' />

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.3)' }}></div>

                            </MDBRipple>
                            <MDBCardBody className="cardVibora">
                                <MDBCardTitle className="cardTitle"><br /><h3>Escola do Víbora</h3></MDBCardTitle>
                                <MDBCardText className="cardText">
                                    <br />
                                </MDBCardText>
                                <Link to="/Vibora">
                                    <MDBBtn color='dark' href='#'>Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </section>
    );
}

export default EscolasHomes;