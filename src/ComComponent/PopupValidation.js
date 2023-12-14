// import React from 'react';
import * as Yup from "yup";

export const PopupValidation = Yup.object({
  fname: Yup.string()
    .min(4, "Name must be at least 4 characters")
    .max(10, "Name cannot exceed 10 characters")
    .required("Please Enter Your Name"),
  mobileno: Yup.number()
    .typeError("Phone Must Be a Number")
    .test(
      "len",
      "Phone Numbermust be exactly 10 Digits",
      (val) => val.toString().length === 10
    )
    .required("Please Enter Your Mobile Number"),
  address: Yup.string()
    .min(4, "Address must be 4 characters")
    .required("Please Enter Your Address"),
  gender: Yup.string()
    .required("Please Select at least one Gender")
    .typeError("Gender is Required"),
  language: Yup.array()
    .of(Yup.string())
    .min(1, "Please Select at least one Language")
    .required("Please Select Language"),
  image: Yup.mixed().required("Photo Cannot be Empty"),
  // .test("fileSize", "File size too large", (value) => {
  //   if (value) {
  //     return value.size <= 1024 * 1024 * 5;
  //   }
  //   return true;
  // }),
});
