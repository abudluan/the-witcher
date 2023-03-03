import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const SinaisHome = () => {
    return (
        <section id="SinaisHome">
            <MDBNavbar className="navbar">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="mx-2">
                        <Link to="/Home">
                            <MDBIcon fas icon="angle-left" className="mx-2" />Voltar
                        </Link>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </section>
    );
};

export default SinaisHome;