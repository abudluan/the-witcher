import React from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
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

import './Quen.scss';

import SinalCapa from '../imagens/Sinais/quen/quen_capa.webp';
import Quen1 from '../imagens/Sinais/quen/quen_simb1.png';
import Quen2 from '../imagens/Sinais/quen/quen_simb2.png';
import Quen3 from '../imagens/Sinais/quen/quen_simb3.png';

const Quen = () =>{
    return(
        <section id="quen">
            <MDBNavbar className="navbar">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="mx-2">
                        <Link to="/SinaisHome">
                            <MDBIcon fas icon="angle-left" className="mx-2" />Voltar
                        </Link>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>



            <MDBContainer>
                <MDBRow>

                    <MDBCol size='md'>
                    </MDBCol>

                    <MDBCol size='md my-5'>
                        <MDBCard>
                            <MDBCardImage position='top' alt='...' src={SinalCapa} />
                            <MDBCardBody className="cardbody">
                                <MDBCardTitle><span className="text-warning"><h1>Quen</h1></span></MDBCardTitle>
                                <MDBCardText>
                                <span className="text-warning">Quen</span> é um sinal mágico simples usado por bruxos. Quando lançado, forma um campo de proteção em torno do bruxo que o protege de ondas sônicas e ataques similares, mas não dos golpes físicos. Sua forma expandida pode proteger de uma gama maior de ações ofensivas.<br/><br/>
                                <q><em>Este sinal pode ser a diferença entre a vida e a morte. Habilidade básica de <span className="text-warning">Quen</span> é cobrir Geralt com um escudo de que absorve uma quantidade limitada de danos. Geralmente isso significa um único golpe da maioria dos inimigos de mesmo nível, mas isso não significa que <span className="text-warning">Quen</span> não é útil. Se você estiver usando Light Armor, sua regeneração de Stamina pode ser tão rápida que você pode lançar <span className="text-warning">Quen</span> várias vezes em uma luta para mantê-lo seguro contra danos. Investir em <span className="text-warning">Quen</span> pode torná-lo capaz de sustentar vários hits antes do efeito se desfazer. Isso aumenta com intensidade do sinal.</em></q><br/>
                                — The Witcher 3: Wild Hunt
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardText className="SinaisGroup"><img src={Quen1} /> <img src={Quen2} /> <img src={Quen3} /></MDBCardText>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md'>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

        </section>
    );
}

export default Quen;