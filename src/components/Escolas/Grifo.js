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

import './Grifo.scss';

import EscolaGrifo from '../imagens/Escolas/escolaGrifo.png';



const Grifo = () => {
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
                            <MDBCardImage position='top' alt='...' src={EscolaGrifo} />
                            <MDBCardBody className="cardbody">
                                <MDBCardTitle className="text-center"><h2>Escola do Grifo</h2></MDBCardTitle>
                                <MDBCardText>
                                    A Escola do Grifo é uma das três escolas de bruxos conhecidas nos livros, junto das escolas do Gato e do Lobo. Ela foi citada pela primeira vez no livro A Senhora do Lago, quando Bonhart exibe um medalhão de cada uma das três escolas para Yennefer, indicando que ele, matou seus antigos donos.
                                    <br/><br/>Apesar de nenhum de seus adeptos ser mencionado nos livros, George, o Assassino de Dragões, um bruxo mencionado no primeiro game, revelou-se ter sido um membro da Escola do Grifo em The Witcher 3: Wild Hunt. Outro provável Grifo seria Coen , um bruxo de Poviss que hibernou em Kaer Morhen durante o treinamento de Ciri , visto que é sabido que ele não é da escola do Lobo, tampouco do Gato, uma vez que os Gatos não são bem vindos em Kaer Morhen.

                                    <br/>Não é mencionado em momento algum onde é localizada a fortaleza dos Grifos, porém é possível presumir-se que seja em Kovir e Poviss , assumindo-se claro, que Coen seja um Grifo.

                                    <br/><br/>Os equipamentos da Escola do Grifo são de peso médio e amplificam a intensidade dos sinais de quem os usa. Como consequência, é muito implicado que as escolas, bem como seus membros, tenham se especializado no uso da magia.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Nome</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Escola do Grifo</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Líder</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Erland de Larvik, Keldar</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Fundador</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Erland de Larvik</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Local</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Fortaleza de Kaer Seren</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Status</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Extinta</MDBListGroupItem>
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

export default Grifo;