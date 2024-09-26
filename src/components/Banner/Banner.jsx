 import {discount} from '../../assets/index'
 import { robot } from '../../assets/index';
import GetCircle from '../ui components/GetCircle';
 import './Banner.css'

const Banner = () => {
    return (
      <div>
            <div className="flex mt-32 items-center">
             <div className='basis-1/2'> 
               <div className='flex items-center'>
                <img src={discount} alt="discount" className='w-12 ' />
                <p className='text-white text-[12px]'>20% <span className="text-[#FFFFFFB2] text-[12px]">DISCOUNT FOR</span> 1 MONTH <span className="text-[#FFFFFFB2]   text-[12px]">ACCOUNT</span></p>

             </div>
             
               <div className=" flex items-center  flex-row">
                <div>
                <h1 className='text-white text-[55px] font-semibold mt-5 text-left'>The Next <br/>
                <span className='generation mb-4 font-semibold text-[55px]'>Generation</span> <br/> 
                Payment Method.</h1>
                
                </div>
                 <GetCircle/>
               </div>
               <p className='text-[#FFFFFFB2] text-left text-[17px] font-normal mt-4 text-balance'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.<br/> 
               We examine annual percentage rates, annual fees.</p>
              
            </div>
            
            <div className='basis-1/2 bg-[rgba(255, 255, 255, 0.6)] robot'>
                <img className='robot_img' src={robot} alt="robot" />
                
            </div>
            
        </div>
      
      </div>
    );
};

export default Banner;