import {bill, apple, google} from '../../assets/index'
import './BillSection.css'

const BillSection = () => {
    return (
        <div className="mt-20 flex justify-end items-center gap-x-[50px] py-12">

        <div className='basis-[60%] pr-3'>
            <img src={bill}  alt="" />
        </div>

            <div className='basis-[40%] '>
            <h2 className="text-white font-semibold text-[40px]">Easily control your <br/> billing & invoicing.</h2>
            <p className="text-[18px] text-[#FFFFFFB2] my-7">Excellence is found even in tough situations. We ensure a  customer experience. Our focus on quality and security is paramount.</p>
         <div className='flex justify-between'>

               <button>
                <img className='' src={apple} alt="apple" />
               </button>
               
               <button>
                <img src={google} alt="google" />
               </button>




                </div>      
      
        </div>
       
    </div>
    );
};

export default BillSection;