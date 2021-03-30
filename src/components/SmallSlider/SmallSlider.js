import React from "react";
import classes from "./SmallSlider.module.css";
import Slider from "react-slick";
import CustomSlide from "./CustomSlide/CustomSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import importSectionImages from "../../shared/importSectionImages";

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

const context = require.context(
    "../../assets/images/slider-sections/",
    false,
    /\.(png|jpe?g|svg)$/
);

const SmallSlider = () => {
    const [images, sectionNames] = importSectionImages(context);
    const sectionImages = images.map((img, index) => {
        return (
            <CustomSlide
                key={index}
                index={index}
                img={img.default}
                section={sectionNames[index]}
            />
        );
    });

    const settings = {
        swipeToSlide: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 9,
        className: classes.slides,
        responsive: [
            {
                breakpoint: 1379,
                settings: {
                    slidesToShow: 7,
                },
            },
            {
                breakpoint: 875,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
        nextArrow: <SampleNextArrow className={classes.SliderArrow} />,
        prevArrow: <SamplePrevArrow className={classes.SliderArrow} />,
    };

    return <Slider {...settings}>{sectionImages}</Slider>;
};

export default SmallSlider;
