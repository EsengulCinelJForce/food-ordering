import Image from "next/image";
import Title from "./ui/Title";
import {HiShoppingCart} from "react-icons/hi"
const CampaingItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-10">
      <div
        className="relative w-44 h-44 after:content-['']
        border-[5px] border-primary rounded-full overflow-hidden " >
        <Image src="/images/o1.jpg" alt="" layout="fill" className="hover:scale-105 transition-all" objectFit="cover" />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl ">Hamsili Pizza</Title>
        <div className="my-2">
            <span className="text-xl font-dancing">20%</span>
            <span>Off</span>
        </div>
        <button className="btn-primary  flex item-center gap-x-2" >
        <HiShoppingCart size={20}/> Order now
            
            </button>
      </div>
    </div>
  );
};

const Campaings = () => {
  return (
    <div className="flex justify-between container mx-auto py-40 gap-5 flex-wrap">
      <CampaingItem />
      <CampaingItem />
    </div>
  );
};

export default Campaings;
