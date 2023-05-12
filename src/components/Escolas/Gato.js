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
                                    <br />— Jaskier em Tempo de Tempestade
                                    <br /><br />A Escola do Gato é uma das escolas da guilda dos bruxos e sua residência era, inicialmente, no Castelo Stygga. Atualmente, a escola se tornou nômade, e sua sede é a Caravana Dyn Marv.<br /><br />
                                    O nome Gato foi escolhido pelos próprios bruxos que não tiveram mutações bem-sucedidas. Eles literalmente são bruxos falidos e são agressivos, cruéis e imprevisíveis. Por isso a fama de lunáticos, psicopatas e sádicos.
                                    <br /><br />Os Gatos (ou Felinos) foram bruxos que desenvolveram estilos de combate baseados em velocidade, precisão e agilidade. Dessa forma, bruxos que as usam não causam muito dano, mas seus golpes podem surtir efeitos críticos mortais. Como consequência, seu equipamento foi projetado para maximizar flexibilidade e fornecer a maior variedade de movimentação.
                                    Infelizmente, os membros dessa escola se revelaram tão flexíveis em termos de moralidade e política quanto em sua armadura. Com o tempo, tornaram-se párias até em meio aos bruxos, dado o seu costume de aceitarem contratos de humanos tanto quanto de monstros, além de outras atividades não previstas no código de bruxos. Nos romances, Geralt de Rívia afirmou repetidas vezes que bruxos não aceitam dinheiro para matar pessoas. Uma das possíveis razões disso são as mutações, que tendem a criar um anormal número de bruxos psicóticos. Independentemente das razões, eles são conhecidos por terem traído a Escola do Lobo e gerado um massacre durante o torneio.
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