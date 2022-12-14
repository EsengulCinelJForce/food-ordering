import React from 'react'
import Title from "../../components/ui/Title";

const Order = () => {
  return (
    <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
    <Title addClass="text-[40px]">Products</Title>
     <div className=" overflow-x-auto w-full mt-5">
      <table className="w-full  text-sm text-center text-gray-500">
        <thead className="text-xs text-gray-200 uppercase bg-gray-700">
          <tr>
            <th scope="col"  className="py-3 px-6">Product</th>
            <th scope="col"  className="py-3 px-6">Customer</th>
            <th scope="col"  className="py-3 px-6">Total</th>
            <th scope="col"  className="py-3 px-6">Payment</th>
            <th scope="col"  className="py-3 px-6">Status</th>
            <th scope="col"  className="py-3 px-6">Actions</th>

          </tr>
        </thead>

        <tbody>
          <tr className=" border-b bg-secondary border-gray-700 hover:bg-primary text-gray-200">
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white  items-center gap-x-1 justify-center"> 
            <span>21323223</span>
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              <span>Esengül</span>
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">10$</td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Cash</td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white"> preparing</td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white"> <button className='btn-primary !bg-green-400' >Next Stage</button></td>

          </tr>
        </tbody>
      </table>
    </div>
</div>
  )
}

export default Order