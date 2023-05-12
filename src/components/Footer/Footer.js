import React from "react";
import './Footer.scss';
import {
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBFooter
} from 'mdb-react-ui-kit';


const Footer = () => {
    return (
        <section id="footer">

            <MDBFooter>
                <div className='iconLink p-1'>
                    <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/luan-abud/' target="_blank" role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://github.com/abudluan' target="_blank" role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://euabud.netlify.app/' target="_blank" role='button'>
                        <MDBIcon fas icon="code" />
                    </MDBBtn>
                </div>



                <div className='textLink text-center p-3'>
                    Desenvolvido por <a href='https://euabud.netlify.app/' target='_blank'> Luan Abud </a>
                </div>
            </MDBFooter>

        </section>
    );
}

export default Footer;