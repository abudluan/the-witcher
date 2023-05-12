import React from "react";
import {
    MDBContainer,
    MDBIcon,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBBtn,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import './StylesSinais.scss';

import Footer from "../Footer/Footer";

import SinalCapa from '../imagens/Sinais/yrden/yrden_capa.webp';
import Yrden1 from '../imagens/Sinais/yrden/yrden_simb1.png';
import Yrden2 from '../imagens/Sinais/yrden/yrden_simb2.png';
import Yrden3 from '../imagens/Sinais/yrden/yrden_simb3.png';

const Yrden = () => {
    return (
        <section id="sinal">

            <MDBContainer>
                <div className="btn-back">
                    <Link as={Link} to="/SinaisHome" ><MDBBtn color="dark"><MDBIcon fas icon="angle-left" /> Voltar</MDBBtn></Link>
                </div>
                <MDBRow>
                    <MDBCol size='md my-5'>
                        <MDBCard>

                            <MDBCardBody className="cardbody">
                                <MDBCardTitle><span className="text-yrden"><h1 className="yrden">Yrden</h1></span></MDBCardTitle>
                                <img className="img-fluid" alt='...' src={SinalCapa} />
                                <MDBCardText className="textCard">
                                    Ao lançar o Sinal <span className="text-yrden">Yrden</span>, o bruxo cria um círculo mágico no chão que lentamente se expande. Qualquer criatura que entrar na área do círculo é afetada pela armadilha, tornando-se mais lenta e menos ágil, o que facilita o combate.
                                    <br/>
                                    <br/>
                                    Além disso, <span className="text-yrden">Yrden</span> é capaz de revelar criaturas invisíveis, como os wraiths e os espectros, que são imunes a ataques normais. Quando uma criatura invisível é revelada, ela se torna vulnerável a ataques e pode ser derrotada com mais facilidade.
                                    <br/>
                                    <br/>
                                    <span className="text-yrden">Yrden</span> é particularmente útil contra inimigos ágeis e evasivos, que podem ser difíceis de acertar com ataques normais. Além disso, ele também pode ser usado para criar uma barreira protetora contra criaturas que se aproximam, o que pode ser útil quando o bruxo precisa de tempo para se curar ou planejar seu próximo movimento.
                                    <br />
                                    <br />
                                    <q><em>Cerrou a laje somente quando ouviu o urro da estrige vindo de cima. Deitou-se ao lado do mumificado corpo de Adda e riscou o Sinal de <span className="text-yrden">Yrden</span> na parte interna da lápide. Colocou sobre o peito a espada e uma pequena ampulheta com areia fosforescente. Cruzou os braços. Não ouvia mais os horripilantes gritos da besta retumbando pelo castelo. Aliás, parou de ouvir qualquer coisa, pois o cólquico e a celidônia começaram a fazer efeito.</em></q><br />
                                    — O Último Desejo, pg 27
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardText className="SinaisGroup"><img src={Yrden1} alt='' /> <img src={Yrden2} alt='' /> <img src={Yrden3} alt='' /></MDBCardText>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <Footer />

        </section>
    );
}

export default Yrden;