import React from 'react';
import './slide.scss';
import SlideItem from './item/item';
import { Slide } from 'react-slideshow-image';
import SlideProduct from './product/product';
import SlideImage from './item/item';
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
        //    console.log(slide transition from ${oldIndex} to ${newIndex});
    }
};
class SlideItems extends React.Component {
    constructor(props) {
       super(props);
       console.log(this.props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="slide-container">
                    <Slide {...properties}>
                        {this.props.items.map((v, i) => (
                           //  <SlideItem key={i} imgPath={v}></SlideItem>
                            this.props.product ? <SlideProduct title={v}></SlideProduct> : <SlideImage key={i} imgPath={v} />
                        ))}
                    </Slide>
                </div>
            </React.Fragment>
        );
    }
}
export default SlideItems;