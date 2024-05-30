import './index.css';
import logo from './LOGO BLUE.png';
import React, { useState } from 'react';
import image1 from './images/image1.JPG';
import image2 from './images/image2.JPG';
import image3 from './images/image3.JPG';
import image4 from './images/image4.JPG';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';

SwiperCore.use([Pagination, Navigation, Autoplay]);



function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <div className="absolute right-[41.7%] top-[38.3%]">
        <div className="relative group">
          <button
            className="bg-bottom hover:bg-navHover w-[5.25vw] h-[6.2vh] text-[1.9vh] cursor-pointer text-white"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="https://trustworthyglass.com/gallery/">
              Gallery
            </a>
          </button>
          <div
            className={`absolute ${isDropdownOpen ? '' : 'hidden'} bg-bottom shadow-lg w-[14vw] left-0 bottom-[-26vh]`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="https://trustworthyglass.com/gallery/residential-glass-gallery/" className="block w-full h-[6vh] text-white hover:bg-navHover">
              <div className="flex flex-col">
                <p className="ml-[0.75vw] mt-[0.25vh]">
                  Residential Glass
                </p>
                <p className="ml-[0.75vw] mt-[-0.25vh]">Gallery</p>
              </div>
            </a>
            <a href="https://trustworthyglass.com/gallery/commercial-gallery/" className="block w-[13vw] h-[5vh] text-white hover:bg-navHover">
              <p className="ml-[0.75vw] pt-[1vh]">
                Commercial Gallery
              </p>
            </a>
            <a href="https://trustworthyglass.com/gallery/shower-door-gallery/" className="block w-full h-[5vh] text-white hover:bg-navHover">
              <p className="ml-[0.75vw] pt-[1vh]">
                Shower Door Gallery
              </p>
            </a>
            <a href="https://trustworthyglass.com/gallery/miscellaneous-gallery/" className="block w-full h-[5vh] text-white hover:bg-navHover">
              <p className="ml-[0.75vw] pt-[1vh]">
                Miscellaneous Gallery
              </p>
            </a>
            <a href="https://trustworthyglass.com/gallery/patterned-glass-gallery/" className="block w-full h-[5vh] text-white hover:bg-navHover">
              <p className="ml-[0.75vw] pt-[1vh]">
                Patterned Glass Gallery
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="h-[6.2vh] w-full bg-header flex items-center text-center justify-center">
        <p className="text-white text-[1.55vh] mt-[0vh] mr-[2vw] text-montesserat">
          Residential and Commercial Glass installation for the Twin Cities, St Paul, Minneapolis and surrounding suburbs Anoka, Ramsey, and Hennepin Counties.
        </p>
      </div>
      <div className="h-[30.8vh] w-full bg-lightBlue">
        <div className="h-full w-full striped-background flex flex-row">
          <div className="absolute top-[12%]">
            <img src={logo} className='h-[95%] w-[60%] ml-[12vw]' alt="Logo" />
          </div>
          <div className="flex flex-col h-[25.5vh] w-[25vw] absolute right-[18%] items-center text-center justify-center">
            <div className="text-estimate absolute top-[18.5%] text-[3.65vh]">FREE ESTIMATE</div>
            <button className="h-[8.5vh] w-[16.25vw] rounded-[0.35vh] mt-[9.5vh] bg-bottom hover:bg-bh cursor-pointer">
              <a href="https://trustworthyglass.com/contact/" className="flex flex-col">
                <p className="text-white text-[2.25vh]">CONTACT US NOW</p>
                <p className="text-white mt-[-0.5vh] text-[2.25vh]">651-633-6290</p>
              </a>
            </button>
            <p className="text-gray-500 text-[1.75vh] mt-[2vh]">4640 Chatsworth St. N, Shoreview, MN 55126</p>
          </div>
        </div>
      </div>
      <div className="h-[9.7vh] w-full bg-bottom border-b border-black flex flex-row items-start text-start justify-start">
        <button className="h-[4.2vh] w-[5.5vw] ml-[12vw] mt-[2.5vh] outline outline-black outline-[0.1vh] text-[1.9vh] cursor-pointer text-black bg-pay rounded-[0.25vh] hover:bg-bottom hover:text-white">
          <a href="https://trustworthyglass.com/pay-online/">Pay Now</a>
        </button>
        <button className="bg-bottom hover:bg-navHover w-[12vw] h-[6.2vh] text-[1.9vh] ml-[7.5vw] mt-[1.3vh] text-white cursor-pointer">
          <a href="https://trustworthyglass.com/shower-enclosures/">Shower Enclosures</a>
        </button>
        <button className="bg-bottom hover:bg-navHover w-[7.75vw] h-[6.2vh] text-[1.9vh] ml-[0.05vw] mt-[1.3vh] text-white cursor-pointer">
          <a href="https://trustworthyglass.com/residential/">Residential</a>
        </button>
        <button className="bg-bottom hover:bg-navHover w-[8vw] h-[6.2vh] text-[1.9vh] ml-[0.05vw] mt-[1.3vh] text-white cursor-pointer">
          <a href="https://trustworthyglass.com/commercial/">Commercial</a>
        </button>
        <div className="w-[5.5vw]"></div>
        <button className="bg-bottom hover:bg-navHover w-[11.25vw] h-[6.2vh] text-[1.9vh] ml-[0.05vw] mt-[1.3vh] text-white cursor-pointer">
          <a href="https://trustworthyglass.com/vendors-partners/">Vendors/Partners</a>
        </button>
        <button className="bg-bottom hover:bg-navHover w-[13vw] h-[6.2vh] text-[1.9vh] ml-[0.05vw] mt-[1.3vh] text-white cursor-pointer">
          <a href="https://trustworthyglass.com/technical-documents/">Technical Documents</a>
        </button>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-row justify-center items-center h-[80vh] w-[40vw] custom-gradient">
          <div className="flex flex-col items-center text-center w-[33vw]">
            <p className="mt-[-18vh] text-white text-[2.75vh]">Trustworthy Glass is Your MN Glass Headquarter</p>
            <div className="w-[33vw]">
              <p className="mt-[15vh] text-white text-[2vh]">This group of text will be the longest one for now</p>
              <p className="mt-[3vh] text-white text-[2vh]">All of them will keep getting smaller I think so</p>
              <p className="mt-[3vh] text-white text-[2vh]">And then it will look kinda like a little funnel</p>
              <p className="mt-[3vh] text-white text-[2vh]">Was that one too long? I really don't know</p>
              <p className="mt-[3vh] text-white text-[2vh]">Maybe I should make more for them</p>
              <p className="mt-[3vh] text-white text-[2vh]">This one's the a last one</p>
            </div>
          </div>
        </div>
        <div className="h-[80vh] w-[60vw] bg-black">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img src={image1} alt="Image 1" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="Image 2" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="Image 3" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="Image 4" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
      </div>
  );
}

export default App;

