import { ButtonFill, ButtonEmpty, ButtonOutline, OvalButtonUnactive, OvalButtonActive } from "../components/button";
import { LargeCard1, LargeCard2, SmallCard } from "../components/card";


export default function BasicPage() {
    return (

        <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-10 p-8">
                <div className="flex flex-col items-center gap-5">
                    <ButtonFill />
                    <ButtonEmpty />
                    <ButtonOutline />
                </div>
                <div className="flex flex-col items-center gap-5">
                    <OvalButtonUnactive />
                    <OvalButtonActive />
                </div>
            </div>
            <div className="flex gap-10 flex-col">
                <LargeCard1 />
                <LargeCard2 />
                <SmallCard />
            </div>
        </div>

    );
}
