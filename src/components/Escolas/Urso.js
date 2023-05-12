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

import EscolaUrso from '../imagens/Escolas/escolaUrso.png';

const Urso = () => {
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
                                <MDBCardTitle className="text-center"><h2>Escola do Urso</h2></MDBCardTitle>
                                <MDBCardText>
                                    <img alt="" src={EscolaUrso} />
                                    A criação da Escola do Urso teve como ponto de partida um conflito intenso entre dois bruxos proeminentes: Arnaghad e Rhys. O motivo desse confronto foi um contrato para eliminar uma terrível criatura que aterrorizava uma aldeia nas terras altas de Kaedwenin.
                                    <br />
                                    <br />
                                    Arnaghad, um bruxo de destaque conhecido por sua força e habilidade em combate, liderou um grupo de aliados em uma luta árdua contra Rhys e a Ordem dos Bruxos. O embate foi feroz e resultou em várias baixas de ambos os lados. Durante o confronto, Arnaghad protagonizou um momento marcante ao ferir Erland de Laravik, um dos membros da Ordem, no rosto. Esse ato ressaltou a intensidade do confronto entre os bruxos.
                                    <br />
                                    <br />
                                    Apesar do esforço e coragem demonstrados por Arnaghad e seus aliados, a Ordem dos Bruxos acabou prevalecendo no confronto. No entanto, essa derrota não diminuiu o espírito resiliente e determinado de Arnaghad. Após o embate, Arnaghad e seus aliados sobreviventes decidiram se afastar da Ordem e e seguir seus próprios caminhos. Eles partiram em uma jornada que os levou às majestosas montanhas Amell, um local isolado e inóspito. Foi lá, nas montanhas Amell, que Arnaghad encontrou o refúgio perfeito para fundar a Escola do Urso. Sob sua liderança, a escola começou a acolher bruxos que compartilhavam sua visão de combate, independência e busca pelo aprimoramento físico e mágico.
                                    <br />
                                    <br />
                                    A Escola do Urso tornou-se conhecida por sua ênfase na força física, resistência e habilidades marciais. Seus bruxos eram treinados para dominar diversas formas de combate, utilizando armas pesadas como machados e martelos de guerra. Além disso, eles também buscavam aprimorar suas habilidades mágicas, combinando-as com suas proezas em combate. A escola adotou uma postura audaz e destemida, diferenciando-se de outras escolas de bruxos que priorizavam a sutileza e furtividade. Os membros da Escola do Urso enfrentavam seus inimigos de frente, confiando em sua força e habilidades para superá-los.
                                    <br/>
                                    <br/>


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
                                <MDBListGroupItem className="cardname">Fundador</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Arnaghad</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Sede</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Haern Caduch</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">País</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Amell</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Atividades</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Contratos de Bruxos</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Status</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Possivelmente extinta</MDBListGroupItem>
                            </MDBListGroup>

                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

            <Footer />

        </section>
    );
}

export default Urso;