import * as Yup  from "yup"

export const reservationSchema = Yup.object({
    fullName:Yup.string().required("isim zorunlu").min(3,"en az üç karakter olmalı"),

    phoneNumber:Yup.string().required("numara zorunlu").min(10,"en az 10 karakter olmalı"),

    email:Yup.string().required("emial zorunlu").email("email geçerli değil  "),

})