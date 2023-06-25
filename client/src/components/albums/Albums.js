import React from 'react';
import './Albums.css';
import { useState, useEffect } from 'react';

function Albums() {
    const [images, setImages] = useState([]);
    const [mainName, setMainName] = useState('');
    const [caption, setCaption] = useState('');

    useEffect(() => {
        setImages(Array.from(document.getElementsByClassName("imgCarousel")));
        const mainPhoto = document.getElementById("mainPhoto");
        setMainName(mainPhoto.getAttribute("name"));
        updateCaption(mainName);
    }, [mainName]);

    function updateImage(event) {
        const image = event.target;
        const name = image.getAttribute("name");
        const mainPhoto = document.getElementById("mainPhoto");
        mainPhoto.src = image.src;
        updateCaption(name);
    }

    function updateCaption(event) {
        setCaption(event);
    }

    return (
        <section className="container">
            <div className="wrapper">
                <img decoding="async" id="mainPhoto" name="Bali" src="images/bali.jpg" />
                <div className="caption-wrapper">
                    <div id="caption"> {caption} </div>
                    <div className="country">indonesian</div>
                    <div className="btn"> <a href="#">add to visit list +</a> </div>
                </div>
            </div>
            <div className="image-wrapper">
                <img decoding="async" className="imgCarousel" name="Bali" src="images/bali.jpg" onClick={updateImage} />
                <img decoding="async" className="imgCarousel" name="Java" src="images/java.jpg" onClick={updateImage} />
                <img decoding="async" className="imgCarousel" name="Komodo" src="images/komodo.jpg" onClick={updateImage} />
                <img decoding="async" className="imgCarousel" name="Papua" src="images/papua.jpg" onClick={updateImage} />
            </div>
        </section>
    );
}

export default Albums;
