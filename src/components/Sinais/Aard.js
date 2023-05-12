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

import SinalCapa from '../imagens/Sinais/aard/aard_capa.webp';
import Aard1 from '../imagens/Sinais/aard/aard_simb1.png';
import Aard2 from '../imagens/Sinais/aard/aard_simb2.png';
import Aard3 from '../imagens/Sinais/aard/aard_simb3.png';

const Aard = () => {
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
                                <MDBCardTitle><span className="text-primary"><h1 className="aard">Aard</h1></span></MDBCardTitle>
                                <img className="img-fluid" alt='...' src={SinalCapa} />
                                <MDBCardText className="textCard">
                                    Quando um bruxo utiliza o Sinal <span className="text-primary">Aard</span>, ele projeta uma rajada de energia à sua frente. Essa rajada pode variar em intensidade e alcance, dependendo da habilidade e do nível de domínio do bruxo. O impacto da energia pode ser usado para empurrar objetos, derrubar inimigos, quebrar barricadas ou até mesmo desestabilizar estruturas.
                                    <br/>
                                    <br/>
                                    O gesto para ativar o Sinal consiste em estender a mão em direção ao alvo desejado, com os dedos esticados e a palma voltada para ele. Ao canalizar sua energia e vontade, o bruxo é capaz de liberar uma poderosa onda de impacto.
                                    <br/>
                                    <br/>
                                    O Sinal <span className="text-primary">Aard</span> é especialmente eficaz em combate, pois pode ser usado para desequilibrar os oponentes, interromper seus ataques ou até mesmo derrubá-los no chão. É uma ferramenta valiosa para os bruxos em situações em que a força física ou a manipulação direta da magia não são suficientes para superar obstáculos ou adversários.
                                    Além do uso em combate, o sinal também tem aplicações práticas fora do campo de batalha. Pode ser utilizado para abrir portas trancadas, deslocar objetos pesados, remover obstáculos ou criar aberturas em estruturas. Sua versatilidade o torna uma ferramenta útil tanto em exploração de locais perigosos como em resolução de quebra-cabeças.
                                    <br/>
                                    <br/>
                                    Vale ressaltar que a eficácia do Sinal <span className="text-primary">Aard</span> pode variar de acordo com a resistência e a natureza dos alvos. Inimigos mais fortes ou estruturas mais resistentes podem exigir um uso mais habilidoso e poderoso do sinal para alcançar os resultados desejados.



                                    <br/>
                                    <br/>
                                    <q><em>O chamado Sinal de <span className="text-primary">Aard</span>, Ciri, é um encanto extremamente simples do grupo de feitiços psicocinéticos, que consiste em empurrar a energia em determinada direção. A força do empuxo depende da concentração mental de quem o lança e da quantidade de força a ele aplicada. Os bruxos adotaram esse encanto porque ele não requer o conhecimento de uma fórmula mágica; bastam concentração e um gesto. Foi por isso que o denominaram de “Sinal”. Já de onde tiraram o nome <span className="text-primary">“Aard”</span> eu não sei. Talvez da Língua Antiga, em que a palavra “ard” significa “cimo”, “superior” ou “mais alto de todos”. Se sim, então o nome é muito enganoso, pois seria difícil encontrar um feitiço psicocinético mais fácil. É óbvio que não vamos perder tempo e energia numa coisa tão primitiva quanto um sinal de bruxos. O que vamos estudar é a psicocinética em si. Vamos treiná-la... Ali, naquele cesto debaixo da macieira. Concentre-se.</em></q><br />
                                    — Trecho de O Sangue dos Elfos
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardText className="SinaisGroup"><img src={Aard1} alt='' /> <img src={Aard2} alt='' /> <img src={Aard3} alt='' /></MDBCardText>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

            <Footer/>

        </section>
    );
}

export default Aard;