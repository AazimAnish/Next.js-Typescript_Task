import { BsPlusLg } from "react-icons/bs";

const ButtonFill = () => {
    return (
        <div>
            <button className="flex bg-green-600 text-black p-2 px-5 rounded-md font-bold text-lg">
                <BsPlusLg className="text-3xl font-light mr-2" /> POST
            </button>
        </div>
    );
};

const ButtonEmpty = () => {
    return (
        <div>
            <button className="flex bg-stone-950 text-green-600 p-2 px-5 rounded-md font-bold text-lg">
                <BsPlusLg className="text-3xl font-light mr-2" /> POST
            </button>
        </div>
    );
};

const ButtonOutline = () => {
    return (
        <div>
            <button className="flex bg-stone-950 text-green-600 outline-2 outline p-2 px-5 rounded-md font-bold text-lg">
                <BsPlusLg className="text-3xl font-light mr-2" /> POST
            </button>
        </div>
    );
};

const OvalButtonUnactive = () => {
    return (
        <div>
            <button className="flex bg-stone-900 text-neutral-200 border-2 border-neutral-700 p-2 px-7 rounded-full font-light text-lg">
                Yesterday
            </button>
        </div>
    );
};

const OvalButtonActive = () => {
    return (
        <div>
            <button className="flex bg-green-950 text-neutral-200 border-2 border-green-600 p-2 px-7 rounded-full font-light text-lg">
                Yesterday
            </button>
        </div>
    );
};

export { ButtonFill, ButtonEmpty, ButtonOutline, OvalButtonUnactive, OvalButtonActive };
