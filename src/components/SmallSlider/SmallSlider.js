import React from "react";
import classes from "./SmallSlider.module.css";
import Slider from "react-slick";
import CustomSlide from "./CustomSlide/CustomSlide";
// import burger from "../../assets/images/burgers/whopper-cheeseburger-right10deg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ></div>
    );
}

const SmallSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 1,
        className: classes.slides,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
        nextArrow: <SampleNextArrow className={classes.SliderArrow} />,
        prevArrow: <SamplePrevArrow className={classes.SliderArrow} />,
    };

    return (
        <Slider {...settings}>
            <CustomSlide index={1} />
            <CustomSlide index={2} />
            <CustomSlide index={3} />
            <CustomSlide index={4} />
            <CustomSlide index={5} />
            <CustomSlide index={6} />
            <CustomSlide index={7} />
            <CustomSlide index={8} />
            <CustomSlide index={9} />
        </Slider>
    );
};

export default SmallSlider;
