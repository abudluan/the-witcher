import React from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBIcon,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import './Vibora.scss';

import EscolaVibora from '../imagens/Escolas/escolaVibora.png';

const Vibora = () =>{
    return(
        <section id="vibora">
            <MDBNavbar className="navbar">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="mx-2">
                        <Link to="/EscolasHome">
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
                        <MDBCard className="cardEscola">
                            <MDBCardImage position='top' alt='...' src={EscolaVibora} />
                            <MDBCardBody className="cardbody">
                                <MDBCardTitle className="text-center"><h2>Escola da Víbora</h2></MDBCardTitle>
                                <MDBCardText>
                                <q><em>Os bruxos víboras são treinados para lutar com lâminas duplas, muitas vezes chamadas de "garras". Este estilo é focado em golpes rápidos e furiosos para sobrecarregar o alvo - seja um monstro ou um homem.</em></q>
                                <br/><br/>A Escola da Víbora foi uma das Escolas de Bruxo situada na fortaleza de Gorthur Gvaed, em um próxima as montanhas Tir Tochair, no Império Nilfgaardiano.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Nome</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Escola da Víbora</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Fundador</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Arnaghad</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Local</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Gorthur Gvaed</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Status</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Ativo</MDBListGroupItem>
                            </MDBListGroup>

                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md'>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>


        </section>
    );
}

export default Vibora;