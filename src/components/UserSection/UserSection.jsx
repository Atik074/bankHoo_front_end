import { stats } from "../../constantData";


const UserSection = () => {

    return (
        <div className=" flex justify-between items-center mt-24">
         {
            stats.map((stat)=>
            <div key={stat.id} >
          <div className="flex items-center ">
            <p className="text-white text-[35px] font-medium">{stat.value}</p>
            <p className="text-[#7DE7EB] text-[20px]  mx-3">{stat.title}</p>
        </div>
           </div>

      )}

   </div>
    )};

export default UserSection;
