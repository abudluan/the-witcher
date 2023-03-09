import React from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
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

import './Yrden.scss';

import SinalCapa from '../imagens/Sinais/yrden/yrden_capa.webp';
import Yrden1 from '../imagens/Sinais/yrden/yrden_simb1.png';
import Yrden2 from '../imagens/Sinais/yrden/yrden_simb2.png';
import Yrden3 from '../imagens/Sinais/yrden/yrden_simb3.png';

const Yrden = () =>{
    return(
        <section id="yrden">
            <MDBNavbar className="navbar">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="mx-2">
                        <Link to="/SinaisHome">
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
                        <MDBCard>
                            <MDBCardImage position='top' alt='...' src={SinalCapa} />
                            <MDBCardBody className="cardbody">
                                <MDBCardTitle><span className="text-yrden"><h1>Yrden</h1></span></MDBCardTitle>
                                <MDBCardText>
                                Quando inscrito em uma superfície sólida, Yrden impede que os monstros se aproximem, assustando-os. Se um ser hostil entra na área afetada pelo sinal, ele é visivelmente desacelerado e forças não-corpóreas tornam-se corpóreas.<br/><br/>
                                <q><em>Cerrou a laje somente quando ouviu o urro da estrige vindo de cima. Deitou-se ao lado do mumificado corpo de Adda e riscou o Sinal de Yrden na parte interna da lápide. Colocou sobre o peito a espada e uma pequena ampulheta com areia fosforescente. Cruzou os braços. Não ouvia mais os horripilantes gritos da besta retumbando pelo castelo. Aliás, parou de ouvir qualquer coisa, pois o cólquico e a celidônia começaram a fazer efeito.</em></q><br/>
                                — O Último Desejo, pg 27
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardText className="SinaisGroup"><img src={Yrden1} /> <img src={Yrden2} /> <img src={Yrden3} /></MDBCardText>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='md'>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

        </section>
    );
}

export default Yrden;