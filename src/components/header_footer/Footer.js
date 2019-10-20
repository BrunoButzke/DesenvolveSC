import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Aprendendo em Família</div>
                <div className="footer_copyright">
                    Unindo pais e professores 
                <span style={{color : 'crimson'}}>♥</span> 
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;