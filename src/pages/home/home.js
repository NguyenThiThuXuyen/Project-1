import React from 'react';
import { Slide } from 'react-slideshow-image';
import './home.scss';



const slideImages = [
    'https://picsum.photos/id/1040/1600/600',
    'https://picsum.photos/id/122/1600/600',
    'https://picsum.photos/id/142/1600/600',
    'https://picsum.photos/id/420/1600/600',
    'https://picsum.photos/id/667/1600/600',
    'https://picsum.photos/id/249/1600/600'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,  //sau 3 hinh quay lai hinh 1
    indicators: true, // dau cham hien thi co bn hinh
    arrows: false, // dau mui ten 2 ben
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

class HomePage extends React.Component {
    render() {
        return (
            <div className="slide-container">
                <Slide {...properties}>
                    {
                        slideImages.map(
                            (v, i) => (
                                <div className="each-slide">
                                    <div style={{ 'backgroundImage': `url(${slideImages[i]})` }}></div>
                                </div>
                            )
                        )
                    }
                </Slide>
            </div>
            )
        }
    }

export default HomePage