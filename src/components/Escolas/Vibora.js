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
                                    <br/>
                                    <br/>
                                    Após os conflitos entre a Escola do Urso e a Ordem dos Bruxos, uma nova dissidência surgiu, resultando na fundação da Escola da Víbora. Esse grupo dissidente conseguiu reunir uma impressionante coleção de livros e pergaminhos relacionados à Caçada Selvagem, o que levou alguns membros a especularem se sua escola havia sido criada com o propósito de desvendar o enigma por trás dos cavaleiros espectrais. Como resultado, todos os bruxos da Escola da Víbora possuíam um profundo conhecimento sobre esse tema misterioso.
                                    <br/>
                                    <br/>
                                    Uma das características distintivas dessa escola era a sua abordagem assassina em suas ações, tanto contra monstros quanto contra humanos. Os bruxos da Víbora dominavam a arte do combate com o uso de duas lâminas ou presas, sendo hábeis assassinos que se moviam com agilidade e precisão letal. Essas habilidades únicas chamaram a atenção de Nilfgaard, que na época era governada por um usurpador.
                                    <br/>
                                    <br/>
                                    O governante de Nilfgaard tentou subjugar e assimilar a Escola da Víbora ao seu domínio, reconhecendo o valor de seus talentosos bruxos. No entanto, os membros da escola resistiram ferozmente às tentativas de subjugação e protegeram sua independência. Diante da resistência, o exército nilfgaardiano decidiu lançar um ataque devastador à fortaleza dos bruxos da Víbora, visando destruí-la completamente.
                                    Apesar do feroz combate dos bruxos da Víbora, a fortaleza acabou sendo arrasada pelo poderoso exército de Nilfgaard. Os sobreviventes da escola foram forçados a se dispersar pelo vasto império, espalhando-se por diferentes terras e se adaptando às novas circunstâncias.
                                    <br/>
                                    <br/>
                                    Embora a escola tenha sido dispersa e sua fortaleza destruída, a reputação e o temor associados aos bruxos da Víbora persistiram. Seus membros continuaram a exercer suas habilidades assassinas em diversas partes do império, agindo como sombras mortais que percorriam as terras, sempre mantendo o enigma da Caçada Selvagem em suas mentes.

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