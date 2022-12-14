import Image from 'next/image'
import React from 'react'
import Title from '../ui/Title'

const Products = () => {
  return (
    <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
        <Title addClass="text-[40px]">Products</Title>
         <div className=" overflow-x-auto w-full mt-5">
          <table className="w-full  text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-200 uppercase bg-gray-700">
              <tr>
                <th scope="col"  className="py-3 px-6">Image</th>
                <th scope="col"  className="py-3 px-6">ID</th>
                <th scope="col"  className="py-3 px-6">Tittle</th>
                <th scope="col"  className="py-3 px-6">Price</th>
                <th scope="col"  className="py-3 px-6">Actions</th>

              </tr>
            </thead>

            <tbody>
              <tr className=" border-b bg-secondary border-gray-700 hover:bg-primary text-gray-200">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center"> 
                  <Image src="/images/f1.png" alt='' width={50} height={50} />
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>213242324</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Pizza</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">10$</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white"> <button className='btn-primary !bg-danger' >Delete</button></td>

              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Products