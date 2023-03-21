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
    MDBListGroupItem

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import EscolaLobo from '../imagens/Escolas/escolaLobo.png';

import './Lobo.scss';

const Lobo = () => {
    return (
        <section id="lobo">
            <div className="navbar">
                <div>
                    <Link as={Link} to="/EscolasHome" className="btn-back"><MDBIcon fas icon="angle-left" /> Voltar</Link>
                </div>
            </div>

            <MDBContainer>
                <MDBRow>

                    <MDBCol size='md'>
                    </MDBCol>

                    <MDBCol size='md my-5'>
                        <MDBCard className="cardEscola">
                            <MDBCardImage position='top' alt='...' src={EscolaLobo} />
                            <MDBCardBody className="cardbody">
                                <MDBCardTitle className="text-center"><h2>Escola do Lobo</h2></MDBCardTitle>
                                <MDBCardText>
                                    A Escola do Lobo é uma escola de bruxos, com sede em Kaer Morhen em Kaedwen.
                                    É a escola que Geralt de Rivia pertence.<br /><br />

                                    A escola originou de uma das facções divididas da Ordem dos Bruxos originais. Seus membros decidiram se estabelecer no norte, nas cavernas do vale de Morhen.
                                    No século XI, a construção de Kaer Morhen foi finalizada, e devido ao fato dos construtores aparentemente terem abandonado o local, ou desaparecido de alguma forma, os Lobos decidiram residir lá.
                                    Nos dias de glória, a Escola do Lobo era uma das mais reconhecidas escolas de bruxos. Seus membros ganharam reputação de caçadores de monstros profissionais e confiáveis.

                                    <br /><br />Na segunda metade do Século XII, Kaer Morhen foi brutalmente atacada por um grupo enfurecido liderado pro magos e sacerdotes. Todos bruxos presentes no castelo, foram mortos. Apesar do ataque ter sido condenado, a escola nunca voltou a funcionar da mesma forma.
                                    Por algum tempo, desde então, as escolas do Lobo e do Gato foram financiadas por Monarcas de Kaedweni. A troca de estudante aconteceu e alguns bruxos mais velhos se tornaram amigos, apesar da maioria dos estudantes não confiarem uns nos outros, gerando assim, na maioria das vezes discussões e brigas.
                                    O Rei Radovid II entretanto, sob a influência do mago da sua corte, Astrogarus e seus druídas, acharam que o renascimento da escolas de bruxos apresentariam uma ameaça ao seu governo. Suas manipulações fez o mestre dos Gatos, Treyse se envolver em um conflito contra os Lobos – durante um Torneio dos Bruxos, ele e alguns de seus estudantes sob sua influência emboscaram Lobos desavisados. Após a maioria dos Lobos terem morrido, o Rei ordenou que seus soldados matassem os Gatos também.

                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Nome</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Escola do Lobo</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Líder</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Vesemir</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Local</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Kaer Morhen</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup horizontal className="cardlist">
                                <MDBListGroupItem className="cardname">Status</MDBListGroupItem>
                                <MDBListGroupItem className="carditem">Ativa</MDBListGroupItem>
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

export default Lobo;