import './index.css';
import logo from './LOGO BLUE.png';
import React, { useState } from 'react';
import image1 from './images/image1.JPG';
import image2 from './images/image2.JPG';
import image3 from './images/image3.JPG';
import image4 from './images/image4.JPG';
import mng from './images/MNG.jpg';
import mha from './images/MHA.jpg';
import msca from './images/MSCA.jpg';
import nga from './images/NGA.jpg';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);

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
            className={`absolute ${isDropdownOpen ? '' : 'hidden'} bg-bottom shadow-lg w-[14vw] left-0 bottom-[-26vh] z-20`}
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
        <div className="flex flex-row justify-center items-center h-[80vh] w-[42vw] custom-gradient">
          <div className="flex flex-col items-center text-center w-[40vw]">
            <p className="mt-[-18vh] text-white text-[2.75vh]">Trustworthy Glass is Your MN Glass Headquarters</p>
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
        <div className="h-[80vh] w-[58vw] bg-black">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
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
        <div className="h-[118vh] w-full">
            <div className="text-center items-center justify-center flex flex-col">
              <p className="text-[4.15vh] mt-[4.5vh] text-header">OUR SERVICES</p>
              <p className="text-[2.3vh] mt-[3vh] text-gray-500 font-bold">Trustworthy glass is a family owned and operated full-service glass company.</p>
              <p className="text-[2vh] mt-[2vh] text-gray-500">We provide our services in the twin cities and surrounding suburbs. We supply and install all forms of glass products, including:</p>
            </div>
            <div className="flex flex-row">
              <img src={image1} className="h-[70vh] w-[25vw] mt-[12.5vh] ml-[10vw]"></img>
              <div className="flex flex-col w-[26vw] text-start items-start justify-start">
                <div className="flex flex-row items-start justify-start">
                  <svg className="mt-[13vh] ml-[1vw]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500 mt-[13vh] text-[2vh]">Frameless shower doors</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Residential and commercial Glass</p>
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">replacement and install.</p>
                  </div>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Commercial storefronts</p>
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">closers, sweeps, thresholds, panics,</p>
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">locks</p>
                  </div>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Mirrors, mirrors, framed mirrors,</p>
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">bathroom mirrors</p>
                  </div>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Pattern glass, obscure glass, low iron</p>
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">glass, frosted glass</p>
                  </div>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <div className="flex flex-col">
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Shelves, tabletops, cabinet, picture</p>
                    <p className="ml-[0.25vw] text-gray-500 text-[2vh]">frames</p>
                  </div>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Screens and storm windows</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Fireplace glass</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Mall storefronts</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Mall storefronts</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Showcase Glass</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Caulking</p>
                </div>
                <div className="flex flex-row mt-[1vh] ml-[1vw]">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vh" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g>
                      <polyline fill="none" stroke="#446bfa" stroke-width="3.5" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21"/>
                    </g>
                    <g>
                      <circle fill="none" stroke="#446bfa" stroke-width="3.5" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/>
                    </g>
                  </svg>
                  <p className="ml-[0.25vw] text-gray-500 text-[2vh]">Reputty Windows</p>
                </div>
              </div>
              <img src={image1} className="h-[70vh] w-[25w] mt-[12.5vh] ml-[3vw]"></img>
            </div>
        </div>
        <div className="text-center items-center justify-center">
            <p className="text-gray-500 font-bold text-[2.35vh]">We also work with business owners and property managers to repair the following:</p>
        </div>
        <div className="mt-[3vh] flex flex-row text-start items-start justify-start text-gray-500 text-[1.9vh]">
            <div className="ml-[15vw]">
              <ul style={{ listStyleType: 'disc', paddingLeft: '0.5vw' }}>
                <li>Continuous hinges</li>
                <li className="mt-[1vh]">Panics and exit devices</li>
                <li className="mt-[1vh]">Fixing leaks</li>
              </ul>
            </div>
            <div className="ml-[10vw]">
              <ul style={{ listStyleType: 'disc', paddingLeft: '0.5vw' }}>
                <li>Closers and crash chains</li>
                <li className="mt-[1vh]">Thresholds and door sweeps</li>
                <li className="mt-[1vh]">
                  Install safety glass when required by
                  <p>code</p>
                  </li>
              </ul>
            </div>
            <div className="ml-[3vw]">
              <ul style={{ listStyleType: 'disc', paddingLeft: '0.5vw' }}>
                <li>Pivots</li>
                <li className="mt-[1vh]">Emergency service and board ups</li>
              </ul>
            </div>
        </div>
        <div className="mt-[12vh] text-center items-center justify-center flex flex-row">
            <p className="text-header text-[3vh]">MEMBER OF:</p>
        </div>
        <div className="mt-[3vh] items-center justify-center flex flex-row">
          <img src={mng} className="h-[10%] w-[10%] mr-[2vw]"></img>
          <img src={msca} className="mr-[2vw]"></img>
          <img src={nga} className="mr-[2vw]"></img>
          <img src={mha} className="mr-[2vw]"></img>
        </div>
        <div className="h-[5.35vh] w-full mt-[5vh] bg-header text-center justify-center">
          <p className="text-white text-[1.65vh] pt-[1.45vh]">© 2019 Trustworthy Glass. All Rights Reserved.</p>
        </div>
      </div>
  );
}

export default App;

