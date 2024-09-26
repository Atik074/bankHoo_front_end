import './Reward.css'
import { FaStar } from "react-icons/fa";
const Reward = () => {
    return (
        <div className="mt-20 flex justify-end items-center gap-x-[50px] py-12">
            <div className='basis-[60%]'>
                <h2 className="text-white font-semibold text-[45px]">You do the business,<br/> we’ll handle the money.</h2>
                <p className="text-[18px] text-[#FFFFFFB2] my-7">With the right credit card, you can improve your financial life by <br/> building credit, earning rewards and saving money. But with <br/> hundreds of credit cards on the market.</p>
                <button className="btn">Get Started</button>
            </div>

            <div className='basis-[40%]'>
            <div className='flex items-center  '>
                <span className='text-[#00F6FF] text-[28px] '><FaStar className='mr-4'/>
                </span>
               <div>
               <h3 className='text-white font-semibold text-[20px]   mb-1'>Rewards</h3>
               <p className='text-[16px] text-[#FFFFFFB2]'>The best credit cards offer some tantalizing <br/> combinations of promotions and prizes </p>
               </div>
            </div>
            <div className='flex items-center  my-6'>
                <span className='text-[#00F6FF] text-[28px] '><FaStar className='mr-4'/>
                </span>
               <div>
               <h3 className='text-white font-semibold text-[20px]   mb-1'>Rewards</h3>
               <p className='text-[16px] text-[#FFFFFFB2]'>We take proactive steps make sure your <br/>information and transactions are secure. </p>
               </div>
            </div>

            <div className='flex items-center  '>
                <span className='text-[#00F6FF] text-[28px] '><FaStar className='mr-4'/>
                </span>
               <div>
               <h3 className='text-white font-semibold text-[20px]   mb-1'>Rewards</h3>
               <p className='text-[16px] text-[#FFFFFFB2] text-balance'>A balance transfer credit card can save <br/> you a lot of money in interest charges. </p>
               </div>
            </div>
            </div>
           
        </div>
    );
};

export default Reward;