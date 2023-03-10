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

import './Urso.scss';

import EscolaUrso from '../imagens/Escolas/escolaUrso.png';

const Urso = () =>{
    return(
        <section id="urso">
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
                            <MDBCardImage position='top' alt='...' src={EscolaUrso} />
                            <MDBCardBody className="cardbody">
                                <MDBCardTitle className="text-center"><h2>Escola do Urso</h2></MDBCardTitle>
                                <MDBCardText>
                                A Escola do Urso foi uma das conhecidas escolas de bruxos. Até 1272 já tinha desaparecido da história.
                                <br/><br/>Os bruxos dessa escola usavam armaduras longas, compostas por peles de animais e placas pesadas, favorecendo defesa a vários tipos de fontes, além de ataques poderosos em detrimento de agilidade.Juntamente com os da Escola do Gato, os bruxos da Escola do Urso são os únicos que utilizam bestas em suas caçadas.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Nome</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Escola do Urso</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Fundador</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Arnaghad</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Local</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Haern Caduch</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Status</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Possivelmente extinta</MDBListGroupItem>
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

export default Urso;