import React, { useState, useEffect } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { InputCom } from "../Common/InputCom";
import RadioCom from "../Common/RadioCom";
import { CheckboxCom } from "../Common/CheckboxCom";
import { ImageCom } from "../Common/ImageCom";
import { Formik, Form, ErrorMessage } from "formik";
import { PopupValidation } from "./PopupValidation";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, EditItem, DeleteItem, fetchGetAPI } from "../Redux/Action";
const initialValuesObj = {
  fname: "",
  mobileno: "",
  address: "",
  gender: "",
  language: [],
  image: "",
};

export const ReduxPopup = () => {
  const [size, setSize] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [formValues, setFormValues] = useState(initialValuesObj);

  const dispatch = useDispatch();
  const submittedData = useSelector((state) => state.itemData.submittedData);
  // console.log("SUBMITTED DATA:", submittedData);

  useEffect(() => {
    dispatch(fetchGetAPI());
  }, []);

  const Radiooptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  const Checkboxoptions = [
    { label: "English", value: "English" },
    { label: "Gujrati", value: "Gujrati" },
  ];

  // console.log("UPDATTED DATA:",formValues);

  const handleOpen = (values) => {
    setSize(values);
  };

  const additem = (values) => {
    handleOpen(null);
    if (editIndex !== null) {
      const updatedData = [...submittedData];
      updatedData[editIndex] = values;
      dispatch(EditItem(values));
      setEditIndex(null);
      // console.log("EDIT DATA",values);
    } else {
      values.userId = Date.now();
      dispatch(AddItem(values));
    }
    setFormValues(initialValuesObj);
    setEditIndex(null);
  };

  const handleEdit = (data) => {
      setFormValues(data);
      setEditIndex(data);
      handleOpen("sm");
  };

  const handleDelete = (data) => {
    dispatch(DeleteItem(data));
  };

  const handleCancel = () => {
    setFormValues(initialValuesObj);
    handleOpen(null);
    setEditIndex(null);
  };

  const handleImageChange = (e, setFieldValue, values) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("image", values.image);
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Image = reader.result;
      values.image = base64Image;
      // console.log(values.image);
    };
  };

  //   const displayString = () => {
  //     // console.log("Image to String to be printed");
  //     // alert(base64Image);
  //   };

  return (
    <>
      <div className="pb-24">
        <Button
          className="float-right m-8"
          onClick={() => handleOpen("sm")}
          variant="gradient"
        >
          Create Schedule
        </Button>
      </div>
      <div>
        <Dialog
          className="rounded-xl m-0 mb-4"
          open={size === "sm" || editIndex !== null}
          handler={() => {
            handleOpen(null);
            setEditIndex(null);
          }}
          animate={{
            mount: { scale: 0.68, x: 0 },
            unmount: { scale: 0.7, x: 100 },
          }}
          size={size || "sm"}
        >
          <DialogHeader className="text-lg font-semibold border-b-2 border-gray-500 text-blue-300">
            {editIndex !== null
              ? "Update Your Schedule"
              : "Create Your Schedule"}
          </DialogHeader>
          <Formik
            initialValues={formValues}
            onSubmit={(values) => additem(values)}
            enableReinitialize={false}
            validationSchema={PopupValidation}
          >
            {/* <div> */}
            {({ values, handleChange, setFieldValue, errors, touched }) => (
              <DialogBody>
                <Form>
                  <div className="relative">
                    <InputCom
                      label="Name:-"
                      value={values.fname}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      id="Name"
                      name="fname"
                    />
                    {errors.fname && touched.fname ? (
                      <div className="text-red-500 flex text-base font-semibold ml-20">
                        {errors.fname}
                      </div>
                    ) : null}
                    {/* <ErrorMessage fname="fname" /> */}

                    <InputCom
                      label="Phone:-"
                      value={values.mobileno}
                      onChange={handleChange}
                      placeholder="Enter Your Mobile Number"
                      id="Phone"
                      name="mobileno"
                    />
                    {errors.mobileno && touched.mobileno ? (
                      <div className="text-red-500 flex text-base font-semibold ml-[90px] ">
                        {errors.mobileno}
                      </div>
                    ) : null}

                    <InputCom
                      label="Address:-"
                      value={values.address}
                      onChange={handleChange}
                      placeholder="Enter Your Address"
                      id="Address"
                      name="address"
                    />
                    {errors.address && touched.address ? (
                      <div className="text-red-500 flex text-base font-semibold ml-[103px]">
                        {errors.address}
                      </div>
                    ) : null}

                    <RadioCom
                      options={Radiooptions}
                      label="Gender:-"
                      name="gender"
                      // id="Gender"
                      selectedValue={values.gender}
                      onChange={handleChange}
                    />
                    {errors.gender && touched.gender ? (
                      <div className="text-red-500 flex text-base font-semibold ml-[90px] ">
                        {errors.gender}
                      </div>
                    ) : null}

                    <div className="flex">
                      <div>
                        <CheckboxCom
                          id="Languages"
                          label="Language"
                          options={Checkboxoptions}
                          name="language"
                          selectedValue={values.language}
                          onChange={handleChange}
                        />
                        {errors.language && touched.language ? (
                          <div className="text-red-500 text-base font-semibold  ">
                            {errors.language}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <ImageCom
                          acceptedFileTypes={[
                            "image/jpeg",
                            "image/png",
                            "application/pdf",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            "application/vnd.ms-excel",
                          ]}
                          name="image"
                          onChange={(e) =>
                            handleImageChange(e, setFieldValue, values)
                          }
                          // onClick={displayString}
                          id="image"
                          value={values.image}
                          formValues={values}
                        />
                        {errors.image && touched.image ? (
                          <div className="text-red-500 grid text-base font-semibold ml-10 ">
                            {errors.image}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="pb-1">
                    <Button
                      // variant="text"
                      color="red"
                      onClick={() => handleCancel()}
                      className="mr-3 hover:text-white hover:bg-red-700 bg-black"
                    >
                      Cancel
                    </Button>
                    <Button
                      // variant="gradient"
                      color="green"
                      type="submit"
                      // onClick={() => handleSubmit()}
                      //   onClick={displayString}
                      // onClick={() => dispatch(AddItem(values))}
                      className=" hover:text-white hover:bg-green-900 bg-green-600"
                    >
                      {editIndex !== null ? "Update" : "Submit"}
                    </Button>
                  </DialogFooter>
                </Form>
              </DialogBody>
            )}
            {/* </div> */}
          </Formik>
        </Dialog>
      </div>
      <div className="relative mb-10 border-2 pt-3 pb-2  shadow-[0_20px_50px_10px_rgb(242,244,246)]  border-blue-300 rounded-2xl mx-20 ">
        <h1 className="pl-6 pb-4 text-blue-300 font-semibold text-lg">
          Material UI Table
        </h1>
        <table className="w-full  ">
          <thead>
            <tr>
              {/* <th>id</th> */}
              <th className="pl-6 text-start">Name</th>
              <th className="text-start">Phone</th>
              <th className="text-start">Address</th>
              <th className="text-start">Gender</th>
              <th className="text-start">Language</th>
              <th className="text-start">Photo</th>
              <th className="text-center pr-5">Actions</th>
            </tr>
          </thead>
          <tbody className="relat divide-y divide-gray-500">
            {submittedData.map((data, userId) => (
              <tr key={userId}>
                {/* <td>{data.id}</td> */}
                <td className="pl-6">{data.fname}</td>
                <td className="text-start">{data.mobileno} </td>
                <td className="text-start">{data.address} </td>
                <td className="text-start">{data.gender} </td>
                <td className="text-start">{data.language.join(",")} </td>
                <td className="py-1">
                  {data.image && (
                    <img
                      src={data.image}
                      // src={
                      //   typeof data.image === "string"
                      //     ? data.image
                      //     : URL.createObjectURL(data.image)
                      // }
                      alt="user"
                      width={45}
                    />
                  )}
                </td>
                <td className="flex justify-center  space-x-2 pt-3 pb-2 ">
                  <button
                    onClick={() => handleEdit(data)}
                    className=" bg-blue-800 hover:bg-green-700 text-white text-[12px] font-normal py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(data.userId)}
                    className="bg-red-500 hover:bg-red-900 text-white text-[12px] font-normal py-1 px-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReduxPopup;
