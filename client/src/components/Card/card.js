import React from 'react';
import './card.css';
import Card from 'react-bootstrap/Card';
import { ArrowCircle, LearnMore } from '../buttons/buttons';

const Cards = () => {
    return (
        <div className='cardMain'>
            <Card>
                <div className='cart_header'>
                    <div className='titleMain'>Title main</div>
                    <div className="content_title">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </div>
                </div>
                <Card.Img
                    className='cardImg'
                    variant="top"
                    src="https://haycafe.vn/wp-content/uploads/2022/03/Anh-Conan-ngau-1.jpg"
                />
                <div className='tile_card'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </div>
                <LearnMore />
            </Card>
        </div>
    );
}

export default Cards