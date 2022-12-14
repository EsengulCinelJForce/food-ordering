import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { Formik, useFormik } from "formik";                        // {/*     3.adım :  */}      4. adım schema actık 
import { loginSchema } from "../../schema/login";                  // 5.adım çağurdık
import {AiFillGithub} from "react-icons/ai"
import Link from "next/link";
const Login = () => {

    const onSubmit = async (values, actions) => {                   //7.adım
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      };


    const {values,errors, touched,handleSubmit,handleChange,handleBlur} = useFormik({    //6.adım
        initialValues: {       
          email: "",
          password:"",          
        },
        onSubmit,  
        validationSchema: loginSchema,          //9.adım  scheme ismini değiştirmeyi unutma
      });



  const inputs = [                                                // {/*     2.adım :  */}
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Your password",
        value: values.password,
        errorMessage: errors.password,
        touched: touched.password,
      },
  ];

  return (
    <div className=" container mx-auto">
      <form className="flex flex-col items-center my-20 w-1/2 mx-auto " onSubmit={handleSubmit}>    {/* div i form a çevirdik submit işlemi için  */}
        <Title addClass="text-[40px] mb-6"> Login</Title>
        <div className="flex flex-col gap-y-2 w-full">
         {/*<Input /> 
         <Input /> */}                                                     {/*     1.adım :    */}
          
          {inputs.map((input) => (<Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}/>))}  {/* 8.adım --> ilk 1. adım gibi yazdık ama mapleyip kaç tane değer döndürdüyse onu gönderdik */}

        </div>
      
        <div className="flex flex-col w-full gap-y-3 mt-6 ">
        <button className="btn-primary">LOGIN </button>
        <button className="btn-primary !bg-secondary flex flex-col items-center"><AiFillGithub/>GITHUB </button>

        <Link href="/auth/register">
            <span className="text-sm underline cursor-pointer text-gray-500">Do you no have a account?</span>
        </Link>

        </div>
      </form>
    </div>
  );
};

export default Login;
