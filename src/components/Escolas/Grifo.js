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

import './StylesEscola.scss';

import Footer from "../Footer/Footer";

import EscolaGrifo from '../imagens/Escolas/escolaGrifo.png';



const Grifo = () => {
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
                                <MDBCardTitle className="text-center"><h2>Escola do Grifo</h2></MDBCardTitle>
                                <MDBCardText>
                                    <img alt="" src={EscolaGrifo} />
                                    A Escola do Grifo teve origem com Erland de Larvik, bruxo pertencente à primeira geração de mutantes.
                                    <br />
                                    <br />
                                    De forma pacífica, Erland e outros 13 bruxos comunicaram a saída da Ordem dos Bruxos e fundaram a Escola do Grifo. Desde sua fundação, os bruxos que a compõe buscam não só caçar monstros, mas possuir uma conduta cavalheiresca. A escola ganhou reputação, chegando a aconselhar reis, entretanto, a diminuição dos monstros levou a perda de desconfiança e futuras perseguições. Por fim, a fortaleza da escola, Kaer Seren, foi destruída por feiticeiros ciumentos. Erland não estava lá no momento, então foi para uma caverna e escreveu todos os conhecimentos da escola. Depois disso, o bruxo sumiu e a escola foi extinta.
                                    <br /><br />A Escola do Grifo é uma das três escolas de bruxos conhecidas nos livros, junto das escolas do Gato e do Lobo. Ela foi citada pela primeira vez no livro A Senhora do Lago, quando Bonhart exibe um medalhão de cada uma das três escolas para Yennefer, indicando que ele, matou seus antigos donos.
                                    <br />Não é mencionado em momento algum onde é localizada a fortaleza dos Grifos, porém é possível presumir-se que seja em Kovir e Poviss , assumindo-se claro, que Coen seja um Grifo.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Nome</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Escola do Grifo</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Fundador</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Erland de Larvik</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Líderes</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Erland de Larvik e Keldar</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Sede</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Kaer Seren</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">País</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Kovir e Poviss</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Atividades</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Contratos de Bruxos</MDBListGroupItem>
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

export default Grifo;