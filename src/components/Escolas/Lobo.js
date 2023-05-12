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
    MDBListGroupItem,
    MDBBtn

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import EscolaLobo from '../imagens/Escolas/escolaLobo.png';

import './StylesEscola.scss';

import Footer from "../Footer/Footer";

const Lobo = () => {
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
                                <MDBCardTitle className="text-center"><h2>Escola do Lobo</h2></MDBCardTitle>
                                <MDBCardText>
                                    <img alt="" src={EscolaLobo} />
                                    A história da escola remonta aos primórdios da Ordem dos Bruxos, quando um grupo de bruxos visionários percebeu a necessidade de criar uma instituição especializada no combate a monstros e na proteção dos inocentes.
                                    <br/>
                                    <br/>
                                    Foi nesse contexto que um bruxo destemido chamado Vesemir decidiu fundar a Escola do Lobo. Ele era um guerreiro experiente e sábio, com uma reputação impecável e uma habilidade incrível para eliminar as abominações que ameaçavam a paz do mundo. Vesemir estava determinado a criar uma escola que se destacasse tanto em habilidades marciais quanto em conhecimento alquímico.
                                    <br/>
                                    <br/>
                                    A Escola do Lobo acolheu jovens órfãos e crianças abandonadas, dando-lhes uma nova chance de vida. Essas crianças foram submetidas a um treinamento rigoroso, tanto físico quanto mental, moldando-as em guerreiros formidáveis e especialistas no rastreamento e extermínio de monstros. Sob a tutela de Vesemir, a escola se tornou uma referência de excelência e disciplina.
                                    <br/>
                                    <br/>
                                    Os bruxos da Escola do Lobo dominavam a arte da esgrima com espadas de prata, consideradas mortais contra criaturas sobrenaturais. Eles aprendiam a estudar e entender a natureza das bestas que caçavam, desenvolvendo táticas e estratégias precisas para cada encontro. Além disso, dedicavam-se à alquimia, dominando o conhecimento de poções e elixires que aumentavam suas habilidades e os protegiam contra os efeitos adversos das batalhas.
                                    <br/>
                                    <br/>
                                    Enquanto os bruxos da Escola do Lobo eram conhecidos por sua ferocidade no combate, também eram valorizados por sua ética própria. Embora a maioria dos bruxos preferisse manter-se neutra em conflitos políticos, eles agiam como defensores dos inocentes, protegendo as comunidades locais das ameaças sobrenaturais. Eles viviam viajando em busca de contratos por monstros.
                                    <br/>
                                    <br/>
                                    Ao longo dos séculos, a Escola do Lobo produziu muitos bruxos notáveis, cujas histórias ecoaram através do tempo. Geralt de Rivia, um dos bruxos mais famosos da escola, se tornou um protagonista lendário nas terras conhecidas. Sua jornada pessoal, suas batalhas épicas e suas escolhas morais moldaram o destino da escola e deixaram um legado que seria reverenciado por gerações futuras.


                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Nome</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Escola do Lobo</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Fundador</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Vesemir</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Líder</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Vesemir</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Sede</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Kaer Morhen</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">País</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Kaedwen</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Atividades</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Contrato de Bruxos</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Status</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Ativa</MDBListGroupItem>
                            </MDBListGroup>

                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

            <Footer />
        </section>
    );
}

export default Lobo;