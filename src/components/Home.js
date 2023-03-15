import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import './Home.scss';

import escolasLogo from './imagens/Escolas/escolas-logo.webp';
import sinaisLogo from './imagens/Sinais/sinais-logo.webp';

const Home = () => {
    return (
        <section id='home'>

            <h3 className="text-page">Escolas e Sinais | The Witcher</h3>

            <MDBContainer className="d-flex align-items-center justify-content-center">
                <MDBRow className="my-5">
                    <MDBCol size='md' className='bg-image hover-overlay'>
                        <img src={escolasLogo} className='img-fluid rounded' />
                        <Link to="/EscolasHome">
                            <div className='mask overlay' style={{ backgroundColor: 'rgba(36, 36, 36, 0.8)' }}>
                                <h4>Escolas</h4>
                                <br />
                                <p>As Escolas de Bruxo, são os lugares onde os bruxos recebem seus ensinamentos e também onde recebem as mutações.</p>
                            </div>
                        </Link>
                    </MDBCol>
                    <MDBCol size='md' className='bg-image hover-overlay'>
                        <img src={sinaisLogo} className='img-fluid rounded' />
                        <Link to="/SinaisHome">
                            <div className='mask overlay' style={{ backgroundColor: 'rgba(36, 36, 36, 0.8)' }}>
                                <h4>Sinais</h4>
                                <br />
                                <p>Embora não sejam magos que empregam magias poderosas, bruxos podem lançar feitiços mágicos simples, que podem se revelar eficazes, quando utilizados corretamente. Bruxos chamam de "Sinais" e normalmente os usam contra monstros, embora eles também possuam aplicações cotidianas.</p>
                            </div>
                        </Link>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

export default Home;