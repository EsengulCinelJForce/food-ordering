import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset ,addProducts} from "../../redux/cartSlice";

const Cards = () => {
  
  const cart =useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className=" flex justify-between items-center">
        <div className="min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10">
          <table className="w-full  text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-200 uppercase bg-gray-700">
              <tr>
                <th scope="col"  className="py-3 px-6">Product</th>
                <th scope="col"  className="py-3 px-6">Extras</th>
                <th scope="col"  className="py-3 px-6">Price</th>
                <th scope="col"  className="py-3 px-6">Quantity</th>
              </tr>
            </thead>

            <tbody>
             {cart.products.map((product) => (
               <tr className=" border-b bg-secondary border-gray-700 hover:bg-primary text-gray-200" key={product.id}>
               <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-4"> 
                 <Image src="/images/f1.png" alt="" width={50} height={50} />
                 <span>{product.name}</span>
               </td>
               <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                 {product.extras.map((item) => (
                  <span key={item.id}>{item.name},</span>
                 ))}
               </td>
               <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">${product.price}</td>
               <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white"> {product.quantity}</td>
             </tr>
             ))}
            </tbody>
          </table>
        </div>



        <div className="bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-12 md:w-auto w-full  ">
            <Title addClass="text-[40px]">Cart Total</Title>

            
            <div className="mt-6">
           
              <b>Subtotal: </b>${cart.total} <br />
              <b className=" inline-block my-1">Discount: </b>$0.00 <br />
              <b>Total: </b>${cart.total}
              
          </div>


            <button className="btn-primary mt-4" onClick={() => dispatch (reset())}>Check</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
