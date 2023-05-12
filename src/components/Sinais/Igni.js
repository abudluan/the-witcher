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

import SinalCapa from '../imagens/Sinais/igni/igni_capa.webp';
import Igni1 from '../imagens/Sinais/igni/igni_simb1.png';
import Igni2 from '../imagens/Sinais/igni/igni_simb2.png';
import Igni3 from '../imagens/Sinais/igni/igni_simb3.png';


const Igni = () => {
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
                                <MDBCardTitle><span className="text-danger"><h1 className="igni">Igni</h1></span></MDBCardTitle>
                                <img className="img-fluid" alt='...' src={SinalCapa} />

                                <MDBCardText className="textCard">
                                    O nome <span className="text-danger">Igni</span> deriva da palavra latina <q><em>Ignis</em></q> que significa fogo e seu icone também é baseado no símbolo alquímico do fogo. É um dos sinais mais proeminentes e amplamente utilizados pelos bruxos, oferecendo-lhes uma poderosa ferramenta de combate e manipulação do fogo.
                                    <br />
                                    <br />
                                    O Sinal <span className="text-danger">Igni</span> é representado por um gesto com as mãos, em que o bruxo forma uma chama com os dedos e a projeta em direção ao alvo desejado. Ao ativá-lo, o bruxo é capaz de criar e controlar o fogo, causando danos significativos aos seus inimigos ou utilizando-o para outros propósitos.
                                    <br />
                                    <br />
                                    Esse sinal é extremamente versátil, pois pode ser usado tanto em combate quanto em situações não violentas. Quando usado como arma ofensiva, o bruxo pode lançar uma rajada de chamas em direção a seus oponentes, queimando-os e causando danos significativos. Além disso, o sinal pode ser utilizado para incendiar objetos, barricadas ou até mesmo criar uma explosão de fogo em uma área limitada. No entanto, <span className="text-danger">Igni</span> também possui aplicações não violentas. O bruxo pode usar sua habilidade com o fogo para acender tochas, fogueiras ou outras fontes de calor. Essa capacidade é particularmente útil em locais escuros ou quando se deseja criar uma atmosfera mais aconchegante. Além disso, o Sinal Igni pode ser usado para queimar teias de aranha, destruir obstáculos inflamáveis ou simplesmente para impressionar e intimidar.
                                    <br />
                                    <br />
                                    O Sinal Igni pode ser aprimorado através da prática e do treinamento contínuo. Bruxos mais experientes podem aumentar a intensidade e a área de efeito do fogo, tornando-o ainda mais devastador. Além disso, eles podem desenvolver habilidades especiais relacionadas ao controle do fogo, como criar uma explosão de fogo concentrada em um único alvo ou até mesmo extinguir chamas existentes.
                                    <br/>
                                    <br/>
                                    Embora o Sinal Igni seja uma habilidade poderosa, seu uso excessivo ou irresponsável pode ter consequências negativas. O fogo descontrolado pode causar danos colaterais indesejados, incendiar áreas e colocar vidas em perigo. Portanto, é essencial que os bruxos usem o Sinal Igni com sabedoria e responsabilidade, levando em consideração os riscos envolvidos.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardText className="SinaisGroup"><img src={Igni1} alt='' /> <img src={Igni2} alt='' /> <img src={Igni3} alt='' /></MDBCardText>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

            <Footer />

        </section>
    );
}

export default Igni;