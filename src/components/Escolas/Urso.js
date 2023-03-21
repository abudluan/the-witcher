import React from "react";
import {
    MDBContainer,
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

const Urso = () => {
    return (
        <section id="urso">
            <div className="navbar">
                <div>
                    <Link as={Link} to="/EscolasHome" className="btn-back"><MDBIcon fas icon="angle-left" /> Voltar</Link>
                </div>
            </div>

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
                                    A Escola do Urso foi uma das mais conhecidas escolas de bruxos. Até 1272 já tinha desaparecido
                                    <br /><br />A Escola do Urso nasceu após um conflito que se deu entre Arnaghad e Rhys, outro bruxo, por um contrato para eliminar um monstro que estava aterroziando uma aldeia nas terras altas de Kaedwenin. Arnaghad, ao lado de aliados, lutou contra Rhys e a Ordem dos Bruxos. Durante a luta, Arnaghad feriu Erland de Laravik no rosto.
                                    <br /><br />A Ordem venceu o confronto, apesar das várias baixas. Arnaghad e os sobreviventes aliados abandonaram a Ordem dos Bruxos e viajaram para as montanhas Amell, onde ele fundou a Escola do Urso.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Nome</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Escola do Urso</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Lider</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Arnaghad</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Local</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Haern Caduch</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Status</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Possivelmente extinta</MDBListGroupItem>
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