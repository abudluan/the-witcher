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

import './Gato.scss';

import EscolaGato from '../imagens/Escolas/escolaGato.png';

const Gato = () => {
    return (
        <section id="gato">
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
                            <MDBCardImage position='top' alt='...' src={EscolaGato} />
                            <MDBCardBody className="cardbody">
                                <MDBCardTitle className="text-center"><h2>Escola do Gato</h2></MDBCardTitle>
                                <MDBCardText>
                                    A Escola do Gato é uma das escolas da guilda dos bruxos e sua residência era, inicialmente, no Castelo Stygga. Atualmente, a escola se tornou nômade, e sua sede é a Caravana Dyn Marv.<br /><br />
                                    Os Gatos (ou Felinos) foram bruxos que desenvolveram estilos de combate baseados em velocidade, precisão e agilidade. Dessa forma, bruxos que as usam não causam muito dano, mas seus golpes podem surtir efeitos críticos mortais. Como consequência, seu equipamento foi projetado para maximizar flexibilidade e fornecer a maior variedade de movimentação.
                                    Infelizmente, os membros dessa escola se revelaram tão flexíveis em termos de moralidade e política quanto em sua armadura. Com o tempo, tornaram-se párias até em meio aos bruxos, dado o seu costume de aceitarem contratos de humanos tanto quanto de monstros, além de outras atividades não previstas no código de bruxos. Nos romances, Geralt de Rívia afirmou repetidas vezes que bruxos não aceitam dinheiro para matar pessoas. Uma das possíveis razões disso são as mutações, que tendem a criar um anormal número de bruxos psicóticos. Independentemente das razões, eles são conhecidos por terem traído a Escola do Lobo e gerado um massacre durante o torneio.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Nome</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Escola do Gato</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Líder</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Gezras de Leyda</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Fundador</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Gezras de Leyda</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Local</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Castelo de Stygga</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem  className="cardname">Status</MDBListGroupItem>
                                <MDBListGroupItem  className="carditem">Ativa</MDBListGroupItem>
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

export default Gato;