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
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import './Aard.scss';

import SinalCapa from '../imagens/Sinais/aard/aard_capa.webp';
import Aard1 from '../imagens/Sinais/aard/aard_simb1.png';
import Aard2 from '../imagens/Sinais/aard/aard_simb2.png';
import Aard3 from '../imagens/Sinais/aard/aard_simb3.png';

const Aard = () => {
    return (
        <section id="aard">
            <div className="navbar">
                <div>
                    <Link as={Link} to="/SinaisHome" className="btn-back"><MDBIcon fas icon="angle-left" /> Voltar</Link>
                </div>
            </div>



            <MDBContainer>
                <MDBRow>

                    <MDBCol size='md'>
                    </MDBCol>

                    <MDBCol size='md my-5'>
                        <MDBCard>
                            <MDBCardImage position='top' alt='...' src={SinalCapa} />
                            <MDBCardBody className="cardbody">
                                <MDBCardTitle><span className="text-primary"><h1>Aard</h1></span></MDBCardTitle>
                                <MDBCardText>
                                    O sinal <span className="text-primary">Aard</span> trata-se de um um impulso telecinético que pode atordoar, empurrar, derrubar ou desarmar os adversários, bem como remover obstáculos e outros objetos.<br /><br />
                                    <q><em>O chamado Sinal de <span className="text-primary">Aard</span>, Ciri, é um encanto extremamente simples do grupo de feitiços psicocinéticos, que consiste em empurrar a energia em determinada direção. A força do empuxo depende da concentração mental de quem o lança e da quantidade de força a ele aplicada. Os bruxos adotaram esse encanto porque ele não requer o conhecimento de uma fórmula mágica; bastam concentração e um gesto. Foi por isso que o denominaram de “Sinal”. Já de onde tiraram o nome <span className="text-primary">“Aard”</span> eu não sei. Talvez da Língua Antiga, em que a palavra “ard” significa “cimo”, “superior” ou “mais alto de todos”. Se sim, então o nome é muito enganoso, pois seria difícil encontrar um feitiço psicocinético mais fácil. É óbvio que não vamos perder tempo e energia numa coisa tão primitiva quanto um sinal de bruxos. O que vamos estudar é a psicocinética em si. Vamos treiná-la... Ali, naquele cesto debaixo da macieira. Concentre-se.</em></q><br />
                                    — Trecho de O Sangue dos Elfos
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardText className="SinaisGroup"><img src={Aard1} /> <img src={Aard2} /> <img src={Aard3} /></MDBCardText>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md'>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

        </section>
    );
}

export default Aard;