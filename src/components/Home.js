import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import escolasLogo from './img/escolas/escolas-logo.webp';
import sinaisLogo from './img/sinais/sinais-logo.webp';

const Home = () => {
    return (
        <section id='home'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='md' className='bg-image hover-overlay'>
                        <img src={escolasLogo} className='img-fluid rounded' />
                        <a href='#!'>
                            <div className='mask overlay' style={{ backgroundColor: 'rgba(36, 36, 36, 0.8)' }}>
                                <h4>Escolas</h4>
                                <br />
                                <p>As Escolas de Bruxo, são os lugares ondem os bruxos recebem seus ensinamentos e também onde recebem as mutações.</p>
                            </div>
                        </a>
                    </MDBCol>
                    <MDBCol size='md' className='bg-image hover-overlay'>
                        <img src={sinaisLogo} className='img-fluid rounded' />
                        <a href='#!'>
                            <div className='mask overlay' style={{ backgroundColor: 'rgba(36, 36, 36, 0.8)' }}>
                                <h4>Sinais</h4>
                                <br />
                                <p>Sinais são magias simples utilizadas pelos bruxos. Com isso, preferem armas de uma mão, porque assim, deixam a outra mão livre para lançar sinais, que quando utilizados de forma correta, podem ser extremamente eficazes contra monstros, e outros tipos inimigos.</p>
                            </div>
                        </a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

export default Home;