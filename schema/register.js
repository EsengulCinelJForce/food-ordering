import * as Yup from "yup";

export const registerSchema = Yup.object({

 fullName:Yup.string().required("isim zorunlu").min(3,"en az üç karakter olmalı"),


  email: Yup.string().required("Email zorunlu").email("Email geçerli değil  "),

  password: Yup.string()
    .required("Password is required")
    .min(8, "en az 8 karakter olmalı")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "pasword must contain at least one uppercase,one lowercase,one number and one special character"), 
    //regex ile büyük küçük özel karakter vs kullanımına göre kural belirleyebiliriz.


    confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"),null],"Password must match"),
});
