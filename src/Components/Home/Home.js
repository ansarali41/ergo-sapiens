import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce } from 'react-reveal';
import MenuBar from '../MenuBar/MenuBar';
import MintModal from '../MintModal/MintModal';
import './Home.css';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    return (
        <div className="main-container">
            <MenuBar />

            {/* banner Img section*/}
            <div className="d-flex justify-content-center">
                <img className="banner-img" src="https://i.ibb.co/LQvvR1R/1-ergosapiens-banner-v3.png" alt="this is img" />
            </div>

            {/* added Bounce animations */}
            <Bounce top>
                {/* Ergo Sapiens about section */}
                <Container className="ergo-about-container">
                    <Row className="d-flex justify-content-center ">
                        <Col sm={12} md={5} lg={5}>
                            <img className="img-fluid" src="https://i.ibb.co/XFGN7Kg/topsecret4.png" alt="" />
                        </Col>
                        <Col sm={12} md={7} lg={6} className="d-flex align-items-center">
                            <div className="ergo-section">
                                <h1 className="ergo-title">ErgoSapiens</h1>
                                <p>In the post-apocalyptic world these ErgoSapiens rule the galaxy!</p>

                                <p>These are a collection of 500 NFTs on the Ergo Blockchain. They are the first of their kind.</p>

                                <p>Catch them for their declassification</p>
                                {/* mint button section */}
                                <div className="d-flex justify-content-center mt-5">
                                    <button className="btn-mint" onClick={handleShowModal}>
                                        Mint
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Bounce>
            {/* mind modal component */}
            <MintModal modalProps={[showModal, setShowModal]} />
        </div>
    );
};

export default Home;
