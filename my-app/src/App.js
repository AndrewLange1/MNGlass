import './index.css';
import logo from './LOGO BLUE.png';

function App() {
  return (
    <div>
      <div className="h-[5.2vh] w-[85vw] bg-header flex items-center text-center justify-center">
        <p className="text-white text-[1.4vh] mr-[6vw] text-montesserat">Residential and Commercial Glass installation for the Twin Cities, St Paul, Minneapolis and surrounding suburbs Anoka, Ramsey, and Hennepin Counties.</p>
      </div>
      <div className="h-[25.5vh] w-[85vw] bg-lightBlue">
        <div className="h-full w-full striped-background flex flex-row">
          <div className="absolute top-[9%]">
            <img src={logo} className='h-[85%] w-[50%] ml-[17vw]' alt="Logo"></img>
          </div>
          <div className="flex flex-col h-[25.5vh] w-[20vw] absolute right-[20%] items-center text-center justify-center">
            <div className="text-estimate absolute top-[12%] text-[3.25vh]">FREE ESTIMATE</div>
            <button className="h-[8vh] w-[14vw] rounded-[0.5vh] mt-[4vh] bg-bottom hover:bg-bh cursor-pointer">
              <div className="flex flex-col">
                <p className="text-white">CONTACT US NOW</p>
                <p className="text-white mt-[-0.5vh]">651-633-6290</p>
              </div>
            </button>
            <p className="text-gray-500 text-[1.55vh] mt-[2vh]">4640 Chatsworth St. N, Shoreview, MN 55126</p>
          </div>
        </div>
      </div>
      <div className="h-[8vh] w-[85vw] bg-bottom flex items-start text-start justify-start">
        <button className="h-[3.75vh] w-[10vw] text-[1.6vh] text-black bg-pay rounded-[0.25vh]">Pay Now</button>      
      </div>
    </div>
  );
}

export default App;
