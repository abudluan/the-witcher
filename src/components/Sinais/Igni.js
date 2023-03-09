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

import './Igni.scss';

import SinalCapa from '../imagens/Sinais/igni/igni_capa.webp';
import Igni1 from '../imagens/Sinais/igni/igni_simb1.png';
import Igni2 from '../imagens/Sinais/igni/igni_simb2.png';
import Igni3 from '../imagens/Sinais/igni/igni_simb3.png';


const Igni = () => {
    return (
        <section id="igni">
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
                                <MDBCardTitle><span className="text-danger"><h1>Igni</h1></span></MDBCardTitle>
                                <MDBCardText>
                                    <span className="text-danger">Igni</span> é um sinal mágico simples usado por bruxos. Trata-se de uma explosão pirocinética que pode empurrar e queimar oponentes, bem como iniciar incêndios. O sinal <span className="text-danger">Igni</span> é um dos cinco sinais mágicos usados por bruxos e causa uma explosão de fogo que pode repelir oponentes, bem como iniciar incêndios. Geralt ainda pode optar por atualizar o sinal para aumentar sua eficácia. <span className="text-danger">Igni</span> é incrivelmente eficaz contra inimigos que são fracos contra fogo. O nome <span className="text-danger">Igni</span> deriva da palavra latina "Ignis" que significa fogo.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardText className="SinaisGroup"><img src={Igni1} /> <img src={Igni2} /> <img src={Igni3} /></MDBCardText>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md'>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

        </section>
    );
}

export default Igni;