import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";

const LargeCard1 = () => {
    return (
        <div className="flex flex-row w-2/4 bg-neutral-950 shadow-lg rounded-lg overflow-hidden outline-1 outline-neutral-800 outline">
            <div className="flex-shrink-0 p-5">
                <Image src="/images/rectangle-2.png" width={120} height={120} alt="large tesla"/>
            </div>
            <div className="p-4">
                <h4 className="text-2xl text-gray-300 font-light">Robosoccer lorem ipsum</h4>
                <p className="text-gray-300 font-extralight text-xl">Some Description About the Organisation</p>

                <div className="flex flex-row gap-2 mt-6">
                    <AiOutlineCalendar className="text-gray-600 text-3xl cursor-pointer" />
                    <p className="text-gray-600 text-lg pt-1">Date</p>
                </div>
            </div>
            <div className="p-4 ml-auto flex items-center">
                <IoIosNotificationsOutline className="text-gray-600 text-4xl cursor-pointer" />
            </div>
        </div>
    );
};

const LargeCard2 = () => {
    return (
        <div className="flex flex-row w-2/4 bg-neutral-950 shadow-lg rounded-lg overflow-hidden outline-1 outline-neutral-800 outline">
            <div className="flex-shrink-0 p-5">
                <Image src="/images/rectangle-2.png" width={120} height={120} alt="large tesla"/>
            </div>
            <div className="p-4">
                <h4 className="text-2xl text-gray-300 font-light">Robosoccer lorem ipsum</h4>
                <p className="text-gray-300 font-extralight text-xl">Some Description About the Organisation</p>

                <div className="flex flex-row gap-2 mt-6">
                    <AiOutlineCalendar className="text-gray-600 text-3xl cursor-pointer" />
                    <p className="text-gray-600 text-lg pt-1">Date</p>
                </div>
            </div>
            <div className="p-4 ml-auto flex items-center">
                <IoIosNotificationsOutline className="text-green-600 text-4xl cursor-pointer" />
            </div>
        </div>
    );
};

const SmallCard = () => {
    return (
        <div className="flex flex-row w-2/4 bg-neutral-950 shadow-lg rounded-lg overflow-hidden outline-1 outline-neutral-800 outline">
            <div className="flex-shrink-0 p-5">
                <Image src="/images/rectangle-1.png" width={70} height={70} alt="small tesla" />
            </div>
            <div className="p-4">
                <h4 className="text-2xl text-gray-300 font-light">Robosoccer lorem ipsum</h4>

                <div className="flex flex-row gap-2 mt-6">
                    <AiOutlineCalendar className="text-gray-600 text-3xl cursor-pointer" />
                    <p className="text-gray-600 text-lg pt-1">Date</p>
                </div>
            </div>
            <div className="p-4 ml-auto flex items-center">
                <IoIosNotificationsOutline className="text-gray-600 text-4xl cursor-pointer" />
            </div>
        </div>
    );
};

export { LargeCard1, LargeCard2, SmallCard }; 
