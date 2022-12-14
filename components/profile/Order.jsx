import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";

const Order = () => {
  return (
    <div className="p-8 flex-1" >
      <Title addClass="text-[40px]">Order</Title>
      <div className=" overflow-x-auto w-full mt-5">
          <table className="w-full  text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-200 uppercase bg-gray-700">
              <tr>
                <th scope="col"  className="py-3 px-6">ID</th>
                <th scope="col"  className="py-3 px-6">Adress</th>
                <th scope="col"  className="py-3 px-6">Date</th>
                <th scope="col"  className="py-3 px-6">Total</th>
                <th scope="col"  className="py-3 px-6">Status</th>

              </tr>
            </thead>

            <tbody>
              <tr className=" border-b bg-secondary border-gray-700 hover:bg-primary text-gray-200">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center"> 
                  <span>12213213312</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>ISTANBUL</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">06-12-2022</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white"> Preparing</td>

              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Order;
