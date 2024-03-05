import React, {useState, useEffect} from "react";
import '../Home/home.css'
import Slider from "react-slick";
import Img from '../Home/img/22b8289b4845282e33788c94352ffd74-removebg-preview (1).png'
import ImgTorn from '../Home/img/SideTorn.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import leftPreview from "../Home/img/left-preview.png";
import rightPreview from "../Home/img/right-preview.png";
import {Card, CardImages} from "../Home/Card/CardImages";
import { FaArrowRight, FaArrowLeft, FaStar, FaYoutube, FaTwitter, FaFacebookF } from 'react-icons/fa';
import imageData from "../Home/img/man-enjoying-nature-woods-forest.jpg";
import imageData1 from "../Home/img/philippines-banaue-rice-terraces.jpg";

function NeverStopHome() {
    const data = [
        {
         img: 'man-enjoying-nature-woods-forest.jpg',
         imageDes: "Banff, Canada"
        },
        {
         img: 'philippines-banaue-rice-terraces.jpg',
         imageDes: "Banaue Ifugao, Philippines"
        },
        {
         img: 'top-places-to-visit-in-the-world-rome-italy.jpg',
         imageDes: "Rome, Italy"
        },
        {
         img: 'top-places-to-visit-in-the-world-rome-italy.jpg',
         imageDes: "Rome, Italy"
        },
     ]
     
     const DataCustomerFeedBack=[
        {
            img: 'man-enjoying-nature-woods-forest.jpg',
            Name: "Ralph Matthew Maglaya",
            FeedBack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            img: 'philippines-banaue-rice-terraces.jpg',
            Name: "Rainielle Maglaya",
            FeedBack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            img: 'top-places-to-visit-in-the-world-rome-italy.jpg',
            Name: "Lokcs Maglaya",
            FeedBack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            img: 'top-places-to-visit-in-the-world-rome-italy.jpg',
            Name: "Matthew Maglaya",
            FeedBack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
     ]

     const dataCard = [
         {
             img: 'philippines-banaue-rice-terraces.jpg',
             category: "Philippines",
             description: "The Banaue Rice Terraces are terraces that were carved into the mountains of Banaue, Ifugao, in the Philippines, by the ancestors of the Igorot people.",
         },
         {
             img: 'top-places-to-visit-in-the-world-rome-italy.jpg',
             category: "Italy",
             description: "Capital of the Roman Empire; a great cultural and artistic centre, esp during the Renaissance."
         },
         {
             img: 'man-enjoying-nature-woods-forest.jpg',
             category: "Canada",
             description: "The Canadian Pacific built a series of grand hotels along the rail line and advertised the Banff Springs Hotel as an international tourist resort."
         },
         {
             img: 'philippines-banaue-rice-terraces.jpg',
             category: "Philippines",
             description: "The Banaue Rice Terraces are terraces that were carved into the mountains of Banaue, Ifugao, in the Philippines, by the ancestors of the Igorot people.",
         },
         {
             img: 'man-enjoying-nature-woods-forest.jpg',
             category: "Canada",
             description: "The Canadian Pacific built a series of grand hotels along the rail line and advertised the Banff Springs Hotel as an international tourist resort."
         },
         {
             img: 'man-enjoying-nature-woods-forest.jpg',
             category: "Canada",
             description: "The Canadian Pacific built a series of grand hotels along the rail line and advertised the Banff Springs Hotel as an international tourist resort."
         },
         {
             img: 'top-places-to-visit-in-the-world-rome-italy.jpg',
             category: "Italy",
             description: "Capital of the Roman Empire; a great cultural and artistic centre, esp during the Renaissance."
         },
         {
             img: 'man-enjoying-nature-woods-forest.jpg',
             category: "Canada",
             description: "The Canadian Pacific built a series of grand hotels along the rail line and advertised the Banff Springs Hotel as an international tourist resort."
         },
          {
             img: 'philippines-banaue-rice-terraces.jpg',
             category: "Philippines",
             description: "The Banaue Rice Terraces are terraces that were carved into the mountains of Banaue, Ifugao, in the Philippines, by the ancestors of the Igorot people.",
         },
         {
            img: 'top-places-to-visit-in-the-world-rome-italy.jpg',
            category: "Italy",
            description: "Capital of the Roman Empire; a great cultural and artistic centre, esp during the Renaissance."
        },
        {
            img: 'philippines-banaue-rice-terraces.jpg',
            category: "Philippines",
            description: "The Banaue Rice Terraces are terraces that were carved into the mountains of Banaue, Ifugao, in the Philippines, by the ancestors of the Igorot people.",
        },
         {
            img: 'man-enjoying-nature-woods-forest.jpg',
            category: "Canada",
            description: "The Canadian Pacific built a series of grand hotels along the rail line and advertised the Banff Springs Hotel as an international tourist resort."
        },
     ]
    const [Page, setPage] = useState(0);
    const [FormSchedData, setFormSchedData] = useState({
        place: '',
        day: '01',
        month: '01',
        year: '2023',
        bedRooms: '',
    })
    const [SelectCategory, setSelectCategory] = useState("All Categories");
    const [ErrorInput, setErrorInput] = useState('');
    const handleChange = (e) => {
        setFormSchedData({ ...FormSchedData, [e.target.name]: e.target.value });
    };
    //Next Page in CustomerFeecback
    const nextPage = () =>{
        setPage(Page + 1);
        if(Page === DataCustomerFeedBack.length - 1 ){
            setPage(0);
        }
    }
    //PrevPage in customerFeedback
    const prevPage = () =>{
        setPage(Page - 1);
        if(Page === 0 ){
            setPage(DataCustomerFeedBack.length - 1 );
        }
    }
    const HandleSubmitSched = async (e)=>{
        e.preventDefault();
        const {place, day, month, year, bedRooms} = FormSchedData;
        try {
            //To set error if null
                if(place === "" || day === "" || month === "" || year === "" || bedRooms === ""){
                    setErrorInput("Please fill in all the inputs");
                }else{
                    setErrorInput("");
                }
            }
           catch (error) {
            console.log(error);
          }
    }
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 6;

    const HandleNext = () =>{
        setCurrentPage(currentPage + 1);
    }

    const HandlePrev = () =>{
        setCurrentPage(currentPage - 1);
    }
    //Get The First Page
    const startIndex = currentPage * cardsPerPage;
    //If the categories is equal all not the companion is remove
    const filterCards = SelectCategory === "All Categories" ? dataCard : dataCard.filter(card => card.category === SelectCategory);
    //Slice the card
    const visibleCards = filterCards.slice(startIndex, startIndex + cardsPerPage);
    //Get the Current Pages
    const totalPages = Math.ceil(filterCards.length / cardsPerPage);
    //Get the maxPages
    const maxPage =  totalPages - 1;
    
    useEffect(()=>{
        if(visibleCards.length === 0){
            setCurrentPage(0);
        }   
        // Start auto-next feature when component mounts
        const interval = setInterval(() => {
            setPage((prevPage) => (prevPage + 1) % DataCustomerFeedBack.length);
        }, 5000);
        // Stop auto-next feature when component unmounts
        return () => clearInterval(interval);

    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      };
    return(
        <React.Fragment>
            <div className="h-screen curstomMargin">
                <div className="bg-custom">
                    <div className="justify-between mx-auto flex bg-margin">
                        <div className="container">
                            <div className="flex justify-center flex-col mx-auto items-center">
                                <img src={Img} className="w-80" alt="ImgNeverStop"/>
                            </div>
                            <div className="mx-auto container p-home">
                                <p className="italic text-primary" style={{maxWidth: "420px"}}> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="mt-5 container mx-auto" style={{maxWidth: "420px"}}>
                                <a href="#home"
                                class="px-8 py-2 no-underline hover:text-slate-200 bg-button-cus text-black italic font-semibold transition ease-in-out duration-200">
                                    Learn More&nbsp; <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="absolute scrollDown">
                            <h1>SCROLL DOWN</h1>
                        </div>
                        <div className="container ImgBg">
                            <div className="ButtonDown border-solid border-2 border-white absolute">
                                <div className="BallSolid"></div>
                            </div>
                            <img className="imgTorn" src={ImgTorn} alt="ImgTorn"/>
                        </div>
                    </div>
                    <div className="container mx-auto bg-box-model rounded relative shadow-shadow3dinset h-auto">
                        <div className="container">
                                <h1 className="text-center text-4xl font-Wellfleet p-5">Dont Stop Exploring Places</h1>
                            <div className="corousel">
                            <Slider 
                            {...settings}
                            >
                                {data.map((item, index) => (
                                    <Card key={index} images={require(`../Home/img/${item.img}`)} titleImg={item.imageDes} />
                                ))}
                            </Slider>
                           </div>
                       </div>
                    </div>
                </div>
                <div className="bg-custom_2">
                    <div className="boxSchd">
                        <form onSubmit={HandleSubmitSched} className="BoxContainerSchd">
                            {ErrorInput && (
                                <h1 className="text-center pb-5 text-2xl text-red-600 font-black">Please fill in all the inputs</h1>
                            )}
                          <div className="flex gap-16 justify-center items-center">
                          <div className="ContainerBoxSched" id="placeBoxSched">
                            <select name="place" id="place" value={FormSchedData.place} onChange={handleChange}>
                                <option value="">Select a place</option>
                                <option value="Paris">Paris</option>
                                <option value="New York">New York</option>
                                <option value="Tokyo">Tokyo</option>
                            </select>
                            </div>
                        <div className="ContainerBoxSched">
                        <div className="Date">
                            <label htmlFor="day">Day:</label>
                            <select name="day" id="day" value={FormSchedData.day} onChange={handleChange}>
                                    {Array.from({length: 31}, (_, i) => i + 1).map((value) => (
                                    <option key={value} value={value.toString().padStart(2, '0')}>{value.toString().padStart(2, '0')}</option>
                                    ))}
                                </select>

                                <label htmlFor="month">Month:</label>
                                <select name="month" id="month" value={FormSchedData.month} onChange={handleChange}>
                                    {Array.from({length: 12}, (_, i) => i + 1).map((value) => (
                                    <option key={value} value={value.toString().padStart(2, '0')}>{value.toString().padStart(2, '0')}</option>
                                    ))}
                                </select>

                                <label htmlFor="year">Year:</label>
                                <select name="year" id="year" value={FormSchedData.year} onChange={handleChange}>
                                    {Array.from({length: 10}, (_, i) => i + new Date().getFullYear()).map((value) => (
                                    <option key={value} value={value.toString()}>{value.toString()}</option>
                                    ))}
                                </select>
                           </div>
                        </div>
                        <div className="ContainerBoxSched">
                            <select name="bedRooms" id="bedRooms" value={FormSchedData.bedRooms} onChange={handleChange}>
                                <option value="">Select a number of bedroom</option>
                                {Array.from({length: 10}, (_, i) => i + 1).map((value) => (
                                    <option key={value} value={value + ` Bedrooms`}>{value} Bedrooms</option>
                                ))}
                            </select>
                        </div>
                            <div className="BtnSched">
                                <button type="submit"><FaArrowRight/></button>
                            </div>
                          </div>
                        </form>
                    </div>
                    <div className="flex justify-center" style={{marginTop: "4rem"}}>
                        <div>
                            <img className="rotate-180" style={{width: "340px"}} src={leftPreview} alt="left"/>
                        </div>
                        <div className="flex items-center flex-col justify-center">
                            <p className="text-primary text-center lemon" style={{fontSize: "2.5rem", fontWeight: "900", maxWidth: "550px"}}>WHAT CAN WE OFFER FOR YOU</p>
                        </div>
                        <div>
                           <img className="rotate-180" style={{width: "340px"}} src={rightPreview} alt="right" />
                        </div>
                    </div>
                    <div className="flex gap-8 justify-center items-center mt-2">
                        <div className="BoxOffer p-5">
                            <div><p className="font-bold" style={{color: "#FFD700", fontSize: "30px", fontFamily: "font-family: 'Inria Serif', serif"}}>Various Destination</p></div>
                            <div><p className="text-justify" style={{color: "#E1D49F"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                        </div>
                        <div className="BoxOffer p-5">
                            <div><p className="font-bold" style={{color: "#FFD700", fontSize: "30px", fontFamily: "font-family: 'Inria Serif', serif"}}>Everything is Included</p></div>
                            <div><p className="text-justify" style={{color: "#E1D49F"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                        </div>
                        <div className="BoxOffer p-5">
                            <div><p className="font-bold" style={{ color: "#FFD700", fontSize: "30px", fontFamily: "font-family: 'Inria Serif', serif"}}>Affordable Prices</p></div>
                            <div><p className="text-justify" style={{color: "#E1D49F"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                        </div>
                    </div>
                    <div className="text-white flex justify-center items-center mt-5 mb-5">
                        <div className="LineAbout"></div>
                            <p className="p-5 lemon text-[35px]">WHO WE ARE?</p>
                        <div className="LineAbout"></div>
                    </div>
                    <section class="image-section flex flex-col items-center justify-center" style={{background: "#000"}}>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <img style={{borderRadius: "10px"}} src={imageData} alt="Image 1" />
                                </div>
                                <div class="col-md-6">
                                    <img style={{borderRadius: "10px"}} src={imageData1} alt="Image 2" />
                                </div>
                                <div class="col-md-6 offset-md-3">
                                    <img style={{borderRadius: "10px"}} src={imageData1} alt="Image 3" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center mt-10">
                                <p className="text-primary text-justify text-[22px] max-w-[800px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="flex justify-center items-center p-5">
                                <button className="px-10 py-4 rounded-xl font-bold flex justify-center items-center gap-5 bg-[#E1D49F] text-[15px] hover:bg-[#fff] ease-in-out duration-300" style={{boxShadow: "inset 0px -3px 10px rgba(0, 0, 0, .50),  5px 5px 5px 2px rgba(0, 0, 0, .25)"}}>Read More <FaArrowRight/></button>
                            </div>
                        </div>
                    </section>
                    <section className="bg-[#121111] shadow-custom">
                       <div className="container mx-auto flex flex-col justify-center items-center">
                            <div className="md flex justify-between items-center mt-20">
                                <p className="text-primary text-[45px] lemon" style={{maxWidth: "400px"}}>We Provide the best Location</p>
                                <img style={{width: "60%"}} src={require(`../Home/img/doubleCurl.png`)} />
                            </div>
                            <div className="text-primary max-[768px]:flex-col font-bold text-[20px] flex justify-center items-center mt-10">
                                <div className="relative">
                                    <button onClick={() => setSelectCategory("All Categories")} className="px-[100px]" type="button">All Categories</button>
                                    <div className={SelectCategory === "All Categories" ? "block w-full h-[3px] bg-[#E1D49F] mt-2 absolute" : "none"}></div>
                                </div>
                                <div className="relative">
                                    <button onClick={() => setSelectCategory("Philippines")} className="px-[100px]" type="button">Philippines</button>
                                    <div className={SelectCategory === "Philippines" ? "block w-full h-[3px] bg-[#E1D49F] mt-2 absolute" : "none"}></div>
                                </div>
                                <div className="relative">
                                    <button onClick={() => setSelectCategory("Canada")} className="px-[100px]" type="button">Canada</button>
                                    <div className={SelectCategory === "Canada" ? "block w-full h-[3px] bg-[#E1D49F] mt-2 absolute" : "none"}></div>
                                </div>
                                <div className="relative">
                                    <button onClick={() => setSelectCategory("Italy")} className="px-[100px]" type="button">Italy</button>
                                    <div className={SelectCategory === "Italy" ? "block w-full h-[3px] bg-[#E1D49F] mt-2 absolute" : "none"}></div>
                                </div>
                            </div>
                       </div>
                       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 mt-10 justify-center items-center">
                            {visibleCards.slice(0, 6).map((item, index) =>(
                                <CardImages key={index} images={require(`../Home/img/${item.img}`)} category={item.category} description={item.description} />
                            ))}                           
                        </div>
                        <div className="flex justify-center items-center p-5">
                            <div className="flex justify-center items-center bg-[#E1D49F] px-10 py-3 gap-20 rounded-xl">
                                <div className="flex justify-center items-center">
                                <button 
                                    onClick={HandlePrev} 
                                    type="button" 
                                    className={currentPage !== 0 ? "text-[20px] font-bold bg-[#fff] px-4 py-2 flex justify-center items-center rounded-xl hover:bg-[#000] hover:text-[#fff] ease-in-out duration-300 hover:shadow-shadowCard shadow-3dshadowcard" : "pointer-events-none text-[20px] font-bold bg-[rgba(255,255,255,0.20)] px-4 py-2 flex justify-center items-center rounded-xl hover:bg-[#000] hover:text-[#fff] ease-in-out duration-300 hover:shadow-shadowCard shadow-3dshadowcard"}
                                    >
                                    <FaArrowLeft />
                                    </button>
                                </div>
                                <div><p className="lemon text-[23px] text-[#141728]">Page {currentPage + 1}</p></div>
                                <div className="flex justify-center items-center">
                                    <button onClick={HandleNext} type="button" className={currentPage !== maxPage ? "text-[20px] font-bold bg-[#fff] px-4 py-2 flex justify-center items-center rounded-xl hover:bg-[#000] hover:text-[#fff] ease-in-out duration-300 hover:shadow-shadowCard shadow-3dshadowcard" : "pointer-events-none text-[20px] font-bold bg-[rgba(255,255,255,0.20)] px-4 py-2 flex justify-center items-center rounded-xl hover:bg-[#000] hover:text-[#fff] ease-in-out duration-300 hover:shadow-shadowCard shadow-3dshadowcard"}><FaArrowRight /></button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="bg-[#FFFFFF] h-[66.5vh]">
                        <div className="text-center mt-5"><p className="lemon text-[40px] italic">CUSTOMERS FEEDBACK!</p></div>
                        <div className="flex flex-col justify-center items-center container max-w-6xl mx-auto mt-5 relative">
                            <div className="absolute left-0">
                                <button className="border-solid border-2 border-[#000] rounded-full p-3 text-[22px] hover:bg-[#000] hover:text-[#fff] transition duration-150 ease=in-out" onClick={prevPage} type="button"><FaArrowLeft /></button>
                            </div>
                            <div className="bg-[#141728] w-[100%] p-8 border rounded-xl max-w-4xl overflow-x-hidden" style={{boxShadow: "inset 0px -3px 13px 0 rgba(0, 0, 0),  5px 4px 10px 4px rgba(0, 0, 0, .55)"}}>
                                {DataCustomerFeedBack[Page] && (
                                    <>
                                        <div className="grid grid-cols-2 gap-x-8 slide-container">
                                            <div className="bg-[#fff] p-2 rounded-2xl">
                                                <img className="w-[400px]" src={require(`../Home/img/${DataCustomerFeedBack[Page].img}`)} />
                                            </div>
                                            <div className="relative">
                                                <div><p className="lemon text-white text-[22px]">{DataCustomerFeedBack[Page].Name}</p></div>
                                                <div><p className="text-[15px] leading-10 text-justify font-bold text-primary mt-2">{DataCustomerFeedBack[Page].FeedBack}</p></div>
                                                <div className="flex mt-3 text-[#FFD700] text-[35px] gap-x-[15px] absolute bottom-[-10px]">
                                                    <div><FaStar style={{textShadow: "inset 0px -3px 13px 0 rgba(0, 0, 0),  5px 4px 10px 4px rgba(0, 0, 0, .55)"}} /></div>
                                                    <div><FaStar style={{textShadow: "inset 0px -3px 13px 0 rgba(0, 0, 0),  5px 4px 10px 4px rgba(0, 0, 0, .55)"}} /></div>
                                                    <div><FaStar style={{textShadow: "inset 0px -3px 13px 0 rgba(0, 0, 0),  5px 4px 10px 4px rgba(0, 0, 0, .55)"}} /></div>
                                                    <div><FaStar style={{textShadow: "inset 0px -3px 13px 0 rgba(0, 0, 0),  5px 4px 10px 4px rgba(0, 0, 0, .55)"}} /></div>
                                                    <div><FaStar style={{textShadow: "inset 0px -3px 13px 0 rgba(0, 0, 0),  5px 4px 10px 4px rgba(0, 0, 0, .55)"}} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="absolute right-0">
                                <button className="border-solid border-2 border-[#000] rounded-full p-3 text-[22px] hover:bg-[#000] hover:text-[#fff] transition duration-150 ease=in-out" onClick={nextPage} type="button"><FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                    <footer className="bg-[#141728] w-full">
                        <div className="container mx-auto flex justify-between items-center h-[80px]">
                            <div className="flex gap-[30px]">
                                <a className="p-2 rounded-[10px] bg-[#DB7210]" style={{boxShadow: "inset 0px -3px 13px 0 rgba(0, 0, 0),  5px 4px 10px 4px rgba(0, 0, 0, .55)"}} href="#"><FaTwitter className="text-[20px] text-white"/></a>
                                <a className="p-2 rounded-[10px] bg-[#DB7210]" style={{boxShadow: "inset 0px -3px 13px 0 rgba(0, 0, 0),  5px 4px 10px 4px rgba(0, 0, 0, .55)"}} href="#"><FaYoutube className="text-[20px] text-white"/></a>
                                <a className="p-2 rounded-[10px] bg-[#DB7210]" style={{boxShadow: "inset 0px -3px 13px 0 rgba(0, 0, 0),  5px 4px 10px 4px rgba(0, 0, 0, .55)"}} href="#"><FaFacebookF className="text-[20px] text-white"/></a> 
                            </div>
                            <div>
                                <p className="text-white font-light">Developed by by Ralph Matthew Maglaya. All Rights Reserved</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NeverStopHome;

   

   
