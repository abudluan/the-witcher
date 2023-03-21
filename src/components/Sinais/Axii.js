import React from "react";
import {
    MDBContainer,
    MDBIcon,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import './Axii.scss';

import SinalCapa from '../imagens/Sinais/axii/axii_capa.webp';
import Axii1 from '../imagens/Sinais/axii/axii_simb1.png';
import Axii2 from '../imagens/Sinais/axii/axii_simb2.png';
import Axii3 from '../imagens/Sinais/axii/axii_simb3.png';

const Axii = () => {
    return (
        <section id="axii">
            <div className="navbar">
                <div>
                    <Link as={Link} to="/SinaisHome" className="btn-back"><MDBIcon fas icon="angle-left" /> Voltar</Link>
                </div>
            </div>
            
            <MDBContainer>
                <MDBRow>

                    <MDBCol size='md'>
                    </MDBCol>

                    <MDBCol size='md my-5'>
                        <MDBCard>
                            <MDBCardImage position='top' alt='...' src={SinalCapa} />
                            <MDBCardBody className="cardbody">
                                <MDBCardTitle><span className="text-success"><h1>Axii</h1></span></MDBCardTitle>
                                <MDBCardText>
                                    <span className="text-success">Axii</span> é uma onda mental que desencadeia um feitiço que pode fazer com que o alvo seja manipulado durante conversas e até lute ao lado do bruxo. O efeito pode se desgastar com o tempo ou ser quebrado através de danos. <br/><br/>
                                    <q><em>A égua relinchou com pesar, erguendo a cabeça. Geralt, com os olhos ainda voltados para a floresta, instintivamente acalmou-a com o Sinal. Levando-a pelas rédeas, encaminhou-se devagar para o muro, afundando até a cintura no meio da folhagem de bardanas.</em></q><br/>
                                    — O Último Desejo - Pg 36
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardText className="SinaisGroup"><img src={Axii1} /> <img src={Axii2} /> <img src={Axii3} /></MDBCardText>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md'>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

        </section>
    );
}

export default Axii;