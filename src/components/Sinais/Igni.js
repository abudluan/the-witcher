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
                                    O nome <span className="text-danger">Igni</span> deriva da palavra latina <q><em>Ignis</em></q> que significa fogo e seu icone também é baseado no símbolo alquímico do fogo. É um dos 5 sinais mágicos simples mais usados pelos bruxos. Trata-se de uma explosão pirocinética que pode empurrar e queimar oponentes, bem como iniciar incêndios. 
                                    <br/><br/>Nos livros, Geralt não só usa <span className="text-danger">Igni</span> durante as batalhas, mas o usa em seu dia a dia, como para consertar um pote com o intuito de preparar uma sopa de pique.
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