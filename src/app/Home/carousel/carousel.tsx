
'use client';
import Slider from "react-slick";
import mobileimage1 from '../../assets/images/mobileimage1.png';
import mobileimage2 from '../../assets/images/mobileimage2.png';
import mobileimage3 from '../../assets/images/mobileimage3.png';
import Image from "next/image";

export function Carousel() {
    const images = [
        { id: 1, src: mobileimage1, alt: "Mobile Image 1", text: "Vehicle Repair" },
        { id: 2, src: mobileimage2, alt: "Mobile Image 2", text: "Vehicle Finance" },
        { id: 3, src: mobileimage3, alt: "Mobile Image 3", text: "Inventory Management" }
    ];
    const settings = {
        centerMode: true,
        slidesToShow: 3,
        centerPadding: '0px',
        dots: true,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '5px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 380,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 770,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '220px',
                    slidesToShow: 1
                }
            },

        ]
    };

    return (
        <div className="image-slider">
            <Slider {...settings}>
                {images.map((item) => (
                    <div key={item.id}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                        />
                        <p className="text-center">{item.text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
