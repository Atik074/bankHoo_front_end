

const UserSection = () => {
    return (
        <div className=" flex justify-between items-center mt-24">
            <div className="flex items-center ">
                <p className="text-white text-[35px] font-medium">3800+</p>
                <p className="text-[#7DE7EB] text-[20px]  mx-3">User Active</p>
            </div>
            <div className="flex items-center ">
                <p className="text-white text-[35px] font-medium">230+
                </p>
                <p className="text-[#7DE7EB] text-[20px] mx-3">TRUSTED BY COMPANY</p>
            </div>
            <div className="flex items-center ">
                <p className="text-white text-[35px] font-medium">$230M+</p>
                <p className="text-[#7DE7EB] text-[20px] mx-3">TRANSACTION</p>
            </div>
        </div>
    );
};

export default UserSection;
