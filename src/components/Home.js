import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


import escolasLogo from './imagens/Escolas/escolas-logo.webp';
import sinaisLogo from './imagens/Sinais/sinais-logo.webp';

const Home = () => {
    return (
        <section id='home'>
            <MDBContainer className="d-flex align-items-center justify-content-center">
                <MDBRow>
                    <MDBCol size='md' className='bg-image hover-overlay'>
                        <img src={escolasLogo} className='img-fluid rounded' />
                        <Link to="/EscolasHome">
                            <div className='mask overlay' style={{ backgroundColor: 'rgba(36, 36, 36, 0.8)' }}>
                                <h4>Escolas</h4>
                                <br />
                                <p>As Escolas de Bruxo, são os lugares ondem os bruxos recebem seus ensinamentos e também onde recebem as mutações.</p>
                            </div>
                        </Link>
                    </MDBCol>
                    <MDBCol size='md py-2' className='bg-image hover-overlay'>
                        <img src={sinaisLogo} className='img-fluid rounded' />
                        <Link to="/SinaisHome">
                            <div className='mask overlay' style={{ backgroundColor: 'rgba(36, 36, 36, 0.8)' }}>
                                <h4>Sinais</h4>
                                <br />
                                <p>Sinais são magias simples utilizadas pelos bruxos. Com isso, preferem armas de uma mão, porque assim, deixam a outra mão livre para lançar sinais, que quando utilizados de forma correta, podem ser extremamente eficazes contra monstros, e outros tipos inimigos.</p>
                            </div>
                        </Link>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

export default Home;