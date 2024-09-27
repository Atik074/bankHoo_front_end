import './Navbar.css'
import {logo}  from '../../../assets/index'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center '>
           <a href='/'>
            <img src={logo} className='w-[124px] h-[32px]' alt="hoobank"/> </a>          
             <div className='menu'>
                <ul>
                    <li><a className='text-[#FFFFFF] text-[18px]' href="/">Home</a></li>
                    <li><a className='text-[#FFFFFFB2] text-[18px]' href="/">Features</a></li>
                    <li><a className='text-[#FFFFFFB2] text-[18px]' href="/">Solutions</a></li>
                    <li><a className='text-[#FFFFFFB2] text-[18px]' href="/">About Us</a></li>
                </ul>
             </div>
          
        </div>
    );
};

export default Navbar;