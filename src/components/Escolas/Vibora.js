import React from "react";
import {
    MDBContainer,
    MDBIcon,
    MDBCard,
    MDBBtn,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import './StylesEscola.scss';

import Footer from "../Footer/Footer";

import EscolaVibora from '../imagens/Escolas/escolaVibora.png';

const Vibora = () => {
    return (
        <section id="escola">

            <MDBContainer>
                <div className="btn-back">
                    <Link as={Link} to="/EscolasHome" ><MDBBtn color="dark"><MDBIcon fas icon="angle-left" /> Voltar</MDBBtn></Link>
                </div>
                <MDBRow>
                    <MDBCol size='md my-5'>
                        <MDBCard className="cardEscola">
                            <MDBCardBody className="cardbody">
                                <MDBCardTitle className="text-center"><h2>Escola da Víbora</h2></MDBCardTitle>
                                <MDBCardText>
                                    <img alt='...' src={EscolaVibora} />
                                    <q><em>Os bruxos víboras são treinados para lutar com lâminas duplas, muitas vezes chamadas de "garras". Este estilo é focado em golpes rápidos e furiosos para sobrecarregar o alvo - seja um monstro ou um homem.</em></q>
                                    <br /><br />Não muito tempo depois dos desentendimentos entre os bruxos da Escola do Urso e a Ordem dos Bruxos, houve mais um grupo dissidente no qual deu origem à escola da víbora. Eles conseguiram coletar uma incrível coleção de livros e pergaminhos sobre a Caçada Selvagem, levando alguns de seus membros a especular se sua escola foi fundada com o propósito de resolver o enigma dos cavaleiros espectrais. Como resultado, todos os bruxos da escola tinham um grande conhecimento sobre o tema.
                                    <br /><br />Entre suas principais características está a abordagem de assassinato em suas ações, seja contra monstros ou humanos, com a utilização de duas lâminas ou presas. Suas ações chamaram a atenção de Nilfgaard, na época sob governança do usurpador. O governante em questão tentou encampar a escola, porém, sem sucesso. Então, o exército nilfgaardiano destruiu a fortaleza dos bruxos da víbora, que se espalharam pelo império.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Nome</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Escola da Víbora</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Fundador</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Ivar Evil Eye</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Sede</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Gorthur Gvaed</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">País</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Nilfgaar</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Atividades</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Contratos de Bruxos Mercenários</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Status</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Extinta</MDBListGroupItem>
                            </MDBListGroup>

                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <Footer />

        </section>
    );
}

export default Vibora;