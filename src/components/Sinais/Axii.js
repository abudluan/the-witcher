import React from "react";
import {
    MDBContainer,
    MDBIcon,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import './StylesSinais.scss';

import Footer from "../Footer/Footer";

import SinalCapa from '../imagens/Sinais/axii/axii_capa.webp';
import Axii1 from '../imagens/Sinais/axii/axii_simb1.png';
import Axii2 from '../imagens/Sinais/axii/axii_simb2.png';
import Axii3 from '../imagens/Sinais/axii/axii_simb3.png';

const Axii = () => {
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
                                <MDBCardTitle><span className="text-success"><h1 className="axii">Axii</h1></span></MDBCardTitle>
                                <img className="img-fluid" alt='...' src={SinalCapa} />
                                <MDBCardText className="textCard">
                                    Também conhecido como "Sinal do Domínio Mental", o sinal <span className="text-success">Axii</span> permite que os bruxos influenciem a mente de outros seres, manipulando suas emoções, pensamentos e ações.
                                    <br/>
                                    <br/>
                                    <span className="text-success">Axii</span> é ativado por meio de um gesto com as mãos, em que o bruxo estende o braço e faz um movimento semicircular em direção ao alvo desejado. Ao usar esse sinal, o bruxo pode exercer controle sobre a mente do alvo, sujeitando-o à sua vontade.
                                    <br/>
                                    <br/>
                                    Existem diferentes níveis de habilidade no uso do Sinal, e bruxos mais experientes podem exercer um controle mais eficaz e duradouro sobre suas vítimas. O efeito do sinal varia de acordo com a resistência mental do alvo e a habilidade do bruxo em aplicá-lo. Em alguns casos, o <span className="text-success">Axii</span> pode simplesmente persuadir uma pessoa a tomar uma determinada ação ou fornecer informações. Em situações mais extremas, o bruxo pode subjugar completamente a mente do alvo, tornando-o um servo obediente.  
                                    <br/>
                                    <br/>
                                    O Sinal tem aplicações diversas e úteis tanto em combate quanto em situações cotidianas. Em termos de batalha, o bruxo pode usar o Axii para confundir e desorientar oponentes, fazendo com que ataquem uns aos outros ou até mesmo se rendam. Isso pode proporcionar uma vantagem tática significativa ao bruxo durante um confronto.
                                    <br/>
                                    <br/>
                                    Fora do combate, <span className="text-success">Axii</span> é frequentemente utilizado para resolver problemas ou obter informações de maneira pacífica. O bruxo pode influenciar a mente de indivíduos relutantes, persuadindo-os a cooperar ou fornecer informações valiosas. Essa habilidade é especialmente útil em negociações, interrogatórios ou ao interagir com pessoas que possuem informações importantes.
                                    <br/>
                                    <br/>
                                    No entanto, é importante ressaltar que o uso do Sinal <span className="text-success">Axii</span> é considerado uma forma de manipulação mental e pode ser visto como uma violação da liberdade individual. Portanto, seu uso deve ser ponderado e ético, evitando abusos e respeitando a autonomia das pessoas.
                                    <br/>
                                    <br/>
                                    <q><em>A égua relinchou com pesar, erguendo a cabeça. Geralt, com os olhos ainda voltados para a floresta, instintivamente acalmou-a com o Sinal. Levando-a pelas rédeas, encaminhou-se devagar para o muro, afundando até a cintura no meio da folhagem de bardanas.</em></q><br />
                                    — O Último Desejo - Pg 36
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardText className="SinaisGroup"><img src={Axii1} alt='' /> <img src={Axii2} alt='' /> <img src={Axii3} alt='' /></MDBCardText>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

            <Footer />

        </section>
    );
}

export default Axii;