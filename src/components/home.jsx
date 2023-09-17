import Header from './header';
import Footer from './footer';
import {imgArr, productMenu} from '../dummy/data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from "react-redux";
import { selectSize } from '../redux/sizeSlice';
import { useState } from 'react';

const Home = () => {

    const sizeArr = useSelector((state) => state.size.sizes);
    const selectedSize = useSelector((state) => state.size.selectedSize);
    const dispatch = useDispatch();
        
    const sizeSelectHandler = (e, id, size) => {
        dispatch(selectSize({size: size}));
    }

    const [selectedImg ,setSelectedImg] = useState(0);

    const slideChanged = (index) => {
        console.log(index)
        setSelectedImg(index);
    }

    return(
        <>
            <Header />
            <div class='flex flex-row flex-wrap justify-between items-start mx-4 md:mx-20 md:my-2'>
                <aside class='hidden md:block basis-3/12 sticky top-16'>
                    <ul class='flex flex-row justify-normal text-sm'>
                        {productMenu.map((item, index) => {
                            return(<li key={index} class='mr-6 font-medium uppercase'>{item}</li>)
                        })}
                    </ul>
                    <p class='text-sm font-normal mt-2'>
                        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel. 
                        <br/><br/>
                        See the EDITOR’S NOTE
                        <br/><br/>
                        Learn about the DESIGNER
                    </p>
                </aside>
                <section class='basis-full md:basis-6/12 flex  items-center'>
                <div class='hidden md:block'>
                    {imgArr.map((item, index) => {
                        return <img src={item} class='w-3/4' key={index}/>
                    })}
                </div>
                <div class='flex flex-col md:hidden'>
                    <Carousel showThumbs={false} showStatus={false} showIndicators={false} onChange={(index) => slideChanged(index)}>
                        {imgArr.map((item, index) => {
                            return(
                                <div key={index}>
                                    <img loading="lazy" src={item} />
                                </div>
                            )
                        })}
                    </Carousel>
                    <ul class='flex justify-center'>
                        {imgArr.map((item, index) => {
                            return(<div className={`${selectedImg === index ? 'bg-black' : 'bg-slate-300'} h-0.5 w-5 my-4 mx-1 rounded-sm`}>  </div>)
                        })}
                    </ul>
                </div>
                </section>
                <aside class='basis-full md:basis-3/12 pt-6 md:pt-24 mb-24 sticky top-16'>
                    <h3 class='text-3xl md:text-5xl font-normal'>JONATHAN SIMKHAI</h3>
                    <p>Lurex Linen Viscose Jacket in Conchiglia</p>
                    <p class='font-bold mb-6'>$225</p>
                    <p class='uppercase'><span class='font-bold '>COLOR</span> Conchiglia</p>
                    <div class='flex my-4'>
                        <img src={imgArr[0]} class='w-16'/>
                        <img src={imgArr[0]} class='w-16'/>
                    </div>
                    <div class='flex justify-between mt-8 mb-2'>
                        <p class="font-bold">SIZE <span class='uppercase font-normal'>{selectedSize}</span></p>
                        <p class='underline'>SIZE GUIDE</p>
                    </div>
                    <ul class='flex flex-row flex-wrap'>
                        {sizeArr && sizeArr.map((item, index) => {
                            return(<li key={index}><button onClick={(e) => sizeSelectHandler(e, item.id, item.size)} className={`${selectedSize === item.size.toLowerCase() ? 'bg-black text-white':'bg-white text-black'} font-normal border-slate-300 rounded-full m-1 px-8 py-2 uppercase`}>{item.size}</button></li>)
                        })}
                    </ul>
                    <button class='text-white rounded-full w-full py-4 my-6 text-sm'>ADD TO BAG</button>
                    <p class='mb-4'>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
                    <p>Speak to a Personal Stylist CHAT NOW</p>
                </aside>
            </div>
            <Footer/>
        </>
    )
}

export default Home;