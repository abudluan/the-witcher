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

import SinalCapa from '../imagens/Sinais/quen/quen_capa.webp';
import Quen1 from '../imagens/Sinais/quen/quen_simb1.png';
import Quen2 from '../imagens/Sinais/quen/quen_simb2.png';
import Quen3 from '../imagens/Sinais/quen/quen_simb3.png';

const Quen = () => {
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
                                <MDBCardTitle><span className="text-warning"><h1 className="quen">Quen</h1></span></MDBCardTitle>
                                <img className="img-fluid" alt='...' src={SinalCapa} />
                                <MDBCardText className="textCard">
                                Quando o bruxo ativa o sinal <span className="text-warning">Quen</span>, ele cria um escudo mágico ao seu redor, formando uma barreira protetora. Essa barreira é capaz de absorver uma quantidade significativa de dano físico e mágico, proporcionando uma camada adicional de defesa ao usuário.
                                <br/>
                                <br/>
                                <span className="text-warning">Quen</span> é especialmente útil em combate, pois permite que o bruxo se proteja de ataques inimigos e reduza o impacto dos golpes recebidos. Ao ativar o sinal, o bruxo é envolto por uma aura brilhante que indica a presença do escudo protetor. Além de sua função defensiva, o sinal também pode ser utilizado para curar ferimentos. Ao direcionar o sinal para si mesmo ou para aliados, é possível restaurar parte da saúde e recuperar rapidamente de lesões. Essa capacidade de cura faz com que o <span className="text-warning">Quen</span> seja uma ferramenta valiosa em situações em que a regeneração natural ou poções não são suficientes para restaurar a vitalidade. 
                                <br/>
                                <br/>
                                Para ativar o <span className="text-warning">Quen</span>, o bruxo realiza um gesto específico, levantando o braço e cruzando-o na frente do corpo, formando um "X" com as mãos. Esse gesto é acompanhado por uma incantação em uma antiga língua arcaica.
                                <br/>
                                <br/>
                                É importante destacar que o sinal possui limitações. Sua barreira protetora tem um tempo de duração limitado e uma quantidade de dano que pode absorver antes de se dissipar. Além disso, o escudo não oferece proteção contra certos tipos de dano, como efeitos de status negativos ou magias muito poderosas. 
                                
                                
                                <br />
                                <br />
                                    <q><em>Este sinal pode ser a diferença entre a vida e a morte. Habilidade básica de <span className="text-warning">Quen</span> é cobrir Geralt com um escudo de que absorve uma quantidade limitada de danos. Geralmente isso significa um único golpe da maioria dos inimigos de mesmo nível, mas isso não significa que <span className="text-warning">Quen</span> não é útil. Se você estiver usando Light Armor, sua regeneração de Stamina pode ser tão rápida que você pode lançar <span className="text-warning">Quen</span> várias vezes em uma luta para mantê-lo seguro contra danos. Investir em <span className="text-warning">Quen</span> pode torná-lo capaz de sustentar vários hits antes do efeito se desfazer. Isso aumenta com intensidade do sinal.</em></q><br />
                                    — The Witcher 3: Wild Hunt
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardText className="SinaisGroup"><img src={Quen1} alt='' /> <img src={Quen2} alt='' /> <img src={Quen3} alt='' /></MDBCardText>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <Footer />

        </section>
    );
}

export default Quen;