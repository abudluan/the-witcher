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

import EscolaGato from '../imagens/Escolas/escolaGato.png';

const Gato = () => {
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
                                <MDBCardTitle className="text-center"><h2>Escola do Gato</h2></MDBCardTitle>
                                <MDBCardText>
                                    <img alt='...' src={EscolaGato} />
                                    <q><em>Os desacreditados Gatos. São bruxos, mas falidos. Mutações falidas. Lunáticos, psicopatas e sádicos.</em></q>
                                    <br />
                                    — Jaskier em Tempo de Tempestade
                                    <br />
                                    <br />
                                    A história da Escola do Gato é envolta em mistério e muitas vezes obscura, assim como os próprios bruxos que a compõem. A origem exata da escola e seu fundador são tópicos frequentemente debatidos, mas há indícios de que a escola tenha sido formada no século XIII.
                                    <br />
                                    <br />
                                    Diferente de outras escolas de bruxos, a Escola do Gato possui uma abordagem mais furtiva e assassina. Seus membros são conhecidos por serem especialistas em assassinato e espionagem, sendo contratados para realizar trabalhos de extrema precisão e discrição. Eles são habilidosos em se infiltrar nas sombras, eliminar seus alvos sem serem detectados e desaparecer sem deixar rastros.
                                    <br />
                                    <br />
                                    Ao longo dos séculos, a Escola do Gato foi liderada por diferentes indivíduos, cada um deixando sua marca na formação e no treinamento dos bruxos. Um dos líderes mais notáveis foi o lendário mestre bruxo conhecido como Mestre da Faca. Sua habilidade com lâminas era lendária e sua técnica se tornou parte integrante do currículo da escola.
                                    <br />
                                    <br />
                                    O treinamento na Escola do Gato é conhecido por ser intenso e brutal. Os aspirantes a bruxos passam por um rigoroso programa de treinamento físico, aprendizado de técnicas de assassino e aprimoramento de suas habilidades mágicas. A mutação é uma parte fundamental do processo, com os bruxos sendo submetidos a experimentos e rituais para aumentar sua agilidade, sentidos e resistência.
                                    <br />
                                    <br />
                                    Infelizmente, os membros dessa escola se revelaram tão flexíveis em termos de moralidade e política quanto em sua armadura. Com o tempo, tornaram-se párias até em meio aos bruxos, dado o seu costume de aceitarem contratos de humanos tanto quanto de monstros, além de outras atividades não previstas no código dos bruxos.
                                    A Escola do Gato é vista com desconfiança e até mesmo temor por muitos. Seus métodos e estilo de vida tornam-nos alvos frequentes de preconceito e perseguição. No entanto, eles são respeitados por suas habilidades letais e são procurados por aqueles que precisam de um trabalho feito sem deixar rastros.

                                    
                                    </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Nome</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Escola do Gato</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Fundador</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Gezras de Leyda</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Líderes</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Gezras de Leyda e Treyse</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Sede</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Castelo de Stygga</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">País</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Ebbing</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Atividades</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Contratos de Bruxos Mercenários</MDBListGroupItem>
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

export default Gato;