import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";
import { Formik, useFormik } from "formik";
import { reservationSchema } from "../schema/reservation";
const Reservation = () => {


    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      };

  const {values,errors, touched,handleSubmit,handleChange,handleBlur} = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      mesaj: "",
    },
    onSubmit,  //formik 
    validationSchema: reservationSchema, //yup

  });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "your full name",
      value:values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,

    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "phone number",
      value:values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,


    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "email",
      value:values.email,
      errorMessage: errors.email,
      touched: touched.email,


    },
    {
      id: 4,
      name: "mesaj",
      type: "text",
      placeholder: "mesaj",
      value:values.mesaj,
      errorMessage: errors.mesaj,
      touched: touched.mesaj,


    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between gap-x-10">
        <div className="flex-1 items-center ">
          <Title addClass="text-[40px] mb-10">Book </Title>
          <form
            className="flex flex-col gap-y-2"
            onSubmit={handleSubmit}
          >
            {inputs.map((input) => (
              <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur} />
            ))}
            <button className="btn-primary mt-3" type="submit">book now</button>
          </form>
        </div>

        <div className="flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30594994064!2d-74.25986652425023!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1669986517977!5m2!1str!2str"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
