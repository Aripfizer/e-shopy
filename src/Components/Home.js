import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../styles/slider-animations.css";
import "../styles/react-sliders.css";
import slider1 from "../assets/slider-bg-1.jpg"
import slider2 from "../assets/slider-bg-5.jpg"
import cat1 from "../assets/cat1.jpg"
import cat2 from "../assets/cat2.jpg"
import cat3 from "../assets/cat3.jpg"
import cat4 from "../assets/cat4.jpg"
import SecondaryButton from "./Utilitaires/SecondaryButton";
import DefaultButton from "./Utilitaires/DefaultButton";

const content = [
    {
        title: "SALE",
        paragraph: "Summer Fashion",
        subtitle: "Up To 30% OFF",
        button: "Read More",
        clas : "md:right-32 right-2 items-right",
        image: `${slider1}`,

    },
    {
        title: "New Collection",
        paragraph: "New Trend 2022",
        subtitle: "Big sale of this week to up 30%",
        button: "Read More",
        clas : "md:left-32 left-2 items-left",
        image: `${slider2}`,

    },
     {
        title: "SALE",
        paragraph: "Summer Fashion",
        subtitle: "Up To 30% OFF",
        button: "Read More",
        clas : "md:right-32 right-2 items-right",
        image: `${slider1}`,

    },
    {
        title: "New Collection",
        paragraph: "New Trend 2022",
        subtitle: "Big sale of this week to up 30%",
        button: "Read More",
        clas : "md:left-32 left-2 items-left",
        image: `${slider2}`,

    },
     {
        title: "SALE",
        paragraph: "Summer Fashion",
        subtitle: "Up To 30% OFF",
        button: "Read More",
        clas : "md:right-32 right-2 items-right",
        image: `${slider1}`,

    },
    {
        title: "New Collection",
        paragraph: "New Trend 2022",
        subtitle: "Big sale of this week to up 30%",
        button: "Read More",
        clas : "md:left-32 left-2 items-left",
        image: `${slider2}`,

    },

];

const imageCardHoverEnter = (e) => {
    //alert('hover')
    const child = e.target.parentElement.parentElement;
    console.log(child.firstElementChild.classList.toggle("scale-125"))
}
const imageCardHoverLeave = (e) => {
    const child = e.target.parentElement.parentElement;
    console.log(child.firstElementChild.classList.toggle("scale-125"))
}

function Home() {
    return (
        <>
            <div className="text-bold text-3xl text-sky-500 text">
                <Slider className="w-full min-h-[85vh] relative" autoplay={1000}>
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="md:text-center h-full"
                            style={{background: `url(${item.image})`}}
                        >
                            <div className={`flex flex-col justify-center md:items-center text-white uppercase absolute top-[35%] ${item.clas} space-y-4`}>
                                <p className="text-xl">{item.paragraph}</p>
                                <h1 className="text-3xl">{item.title}</h1>
                                <p className="text-2xl">{item.subtitle}</p>
                                <SecondaryButton link="/" text={item.button}></SecondaryButton>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>

            <div className="w-full mt-20">
                <div className="md:w-[80%] mx-auto w-full px-8 grid grid-cols-3 gap-6">
                    <div className="relative overflow-hidden">
                        <img className="hover:scale-125 transition duration-700" src={cat1} alt="categorie 1" />
                        <div onMouseEnter={imageCardHoverEnter} onMouseLeave={imageCardHoverLeave} className="absolute top-[45%] left-[35%]">
                            <DefaultButton text="For men's" link="/" />
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-6">
                        <div className="relative overflow-hidden">
                            <img className="hover:scale-125 transition duration-700" src={cat2} alt="categorie 2" />
                            <div onMouseEnter={imageCardHoverEnter} onMouseLeave={imageCardHoverLeave} className="absolute top-[45%] left-[35%]">
                                <DefaultButton text="For kid's" link="/" />
                            </div>
                        </div>
                        <div className="relative overflow-hidden">
                            <img className="hover:scale-125 transition duration-700" src={cat3} alt="categorie 3" />
                            <div onMouseEnter={imageCardHoverEnter} onMouseLeave={imageCardHoverLeave} className="absolute top-[45%] left-[35%]">
                                <DefaultButton text="accessories" link="/" />
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden">
                        <img className="hover:scale-125 transition duration-700" src={cat4} alt="categorie 4" />
                        <div onMouseEnter={imageCardHoverEnter} onMouseLeave={imageCardHoverLeave} className="absolute top-[45%] left-[35%]">
                            <DefaultButton text="For women's" link="/" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Home;