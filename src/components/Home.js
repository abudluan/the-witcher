import React from "react";
import {
    MDBContainer, MDBRow, MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBFooter,
    MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import './Home.scss';

import escolasLogo from './imagens/Escolas/escolas-logo2.png';
import sinaisLogo from './imagens/Sinais/sinais-logo2.png';

const Home = () => {
    return (
        <section id='home'>
            <div className="navbar">
                <h3 className="text-page">Escolas e Sinais | The Witcher</h3>
            </div>

            <MDBContainer className="text-center my-5 py-5">
                <MDBRow>
                    <MDBCol size='md'>
                        <MDBCard className="Escolas">
                            <MDBCardImage src={escolasLogo} position='top' alt='...' />
                            <MDBCardBody className="cardbodyEscolas">
                                <MDBCardTitle className="titleEscolas">Escolas</MDBCardTitle>
                                <MDBCardText className="textDesc">
                                    No inicio, havia uma organização que reunia todos os bruxos, era chamada de Ordem dos Bruxos. Após diversos conflitos, a Ordem de desfez e diversos bruxos se espalharam pelo continente dando origem as escolas, um lugar que oferecia treinamento, ensinamentos e mutações para novos bruxos.
                                </MDBCardText>
                                <Link to="/EscolasHome">
                                    <MDBBtn color='dark' className="btnCard" href='#'>Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md'>
                        <MDBCard className="Sinais">
                            <div className="imgSinal">
                                <MDBCardImage src={sinaisLogo} position='top' alt='...' />
                            </div>
                            <MDBCardBody className="cardbodySinal">
                                <MDBCardTitle className="titleSinal">Sinais</MDBCardTitle>
                                <MDBCardText className="textDesc">
                                    Embora não sejam magos que empregam magias poderosas, bruxos podem lançar feitiços mágicos simples, que podem se revelar eficazes, quando utilizados corretamente. Bruxos chamam de "Sinais" e normalmente os usam contra monstros, embora eles também possuam aplicações cotidianas.
                                </MDBCardText>
                                <Link to="/SinaisHome">
                                    <MDBBtn color='dark' className="btnCard" href='#'>Ver mais</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

            <MDBFooter className='footer' >
                <MDBContainer className='iconLink p-1'>
                    <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/luan-abud/' target="_blank" role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://github.com/abudluan' target="_blank" role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </MDBContainer>



                <div className='textLink text-center p-3'>
                    Desenvolvido por <a href='https://euabud.netlify.app/' target='_blank'> Luan Abud </a>
                </div>
            </MDBFooter>
        </section>
    );
};

export default Home;