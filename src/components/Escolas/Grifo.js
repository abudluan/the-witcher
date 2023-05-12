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
                                    A Escola do Grifo teve sua origem com Erland de Larvik, um bruxo proeminente e pertencente à primeira geração de mutantes. Diferente de outras escolas de bruxos, a Escola do Grifo foi fundada de maneira pacífica, quando Erland e outros 13 bruxos decidiram comunicar sua saída da Ordem dos Bruxos e estabelecer uma nova escola.
                                    <br/>
                                    <br/>
                                    Desde sua fundação, a Escola do Grifo tinha como objetivo não apenas caçar monstros, mas também seguir uma conduta cavalheiresca. Os bruxos dessa escola buscavam combinar suas habilidades mágicas com um senso de honra e justiça, aconselhando até mesmo reis e liderando campanhas contra ameaças monstruosas. A reputação da escola cresceu, e seus membros eram reconhecidos como guerreiros habilidosos e honrados.
                                    <br/>
                                    <br/>
                                    No entanto, à medida que o número de monstros diminuía com o passar dos anos, a confiança e a necessidade de serviços dos bruxos também começaram a diminuir. Eles passaram a ser vistos com desconfiança e foram alvo de perseguições por parte de outros feiticeiros e poderosos magos, que sentiam inveja da reputação e influência da Escola.
                                    <br/>
                                    <br/>
                                    Infelizmente, a história da Escola do Grifo teve um desfecho trágico. A fortaleza da escola, conhecida como Kaer Seren, foi destruída por feiticeiros ciumentos que buscavam eliminar a concorrência e usurpar o prestígio dos Grifos. Erland de Larvik, porém, não estava presente durante o ataque, pois havia se refugiado em uma caverna segura.
                                    <br/>
                                    <br/>
                                    Enquanto estava na caverna, Erland escreveu todos os conhecimentos e segredos da Escola do Grifo em pergaminhos, garantindo que o legado e a sabedoria da escola não fossem perdidos. Após concluir essa tarefa, o bruxo desapareceu misteriosamente, deixando para trás apenas os pergaminhos que continham os ensinamentos e tradições da escola.
                                    Com a destruição de Kaer Seren e o desaparecimento de Erland, a Escola do Grifo foi considerada extinta. Seus poucos sobreviventes espalharam-se pelo continente, levando consigo o conhecimento e a herança da escola. Embora não houvesse mais uma sede oficial da escola, os pergaminhos de Erland se tornaram tesouros valiosos e cobiçados por aqueles que desejavam aprender os segredos da antiga escola.
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