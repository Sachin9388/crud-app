import React, { useState } from "react";

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
import { Formik, Form, ErrorMessage, replace } from "formik";
import { PopupValidation } from "./PopupValidation";

const initialValuesObj = {
  name: "",
  phone: "",
  address: "",
  gender: "",
  language: [],
  photo: null,
};

export const Popup = () => {
  const [size, setSize] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formValues, setFormValues] = useState(initialValuesObj);

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

  const addItem = (values) => {
    handleOpen(null);
    setSize(null);
    // console.log("SUBMITTED DATA:", submittedData);
    if (editIndex !== null) {
      const updatedData = [...submittedData];
      updatedData[editIndex] = values;
      setSubmittedData(updatedData);
      setEditIndex(null);
      // console.log("EDIT DATA",values);
    } else {
      // handleOpen(null);
      setSubmittedData([...submittedData, values]);
    }
    setFormValues(initialValuesObj);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const tableData = submittedData[index];
    setFormValues(tableData);
    setEditIndex(index);
    handleOpen(null);
    // handleOpen("sm");
  };

  const handleDelete = (index) => {
    const filterData = submittedData.filter((data, i) => i !== index);
    setSubmittedData(filterData);
  };

  const handleCancel = () => {
    setFormValues(initialValuesObj);
    handleOpen(null);
    setEditIndex(null);
  };

  const handlePhotoChange = (e, setFieldValue, values) => {
    const file = e.target.files[0];

    if (file) {
      setFieldValue("photo", file);
    }

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64Image = reader.result;
      values.photo = base64Image;
      // console.log(values.photo);
    };
  };

  // const displayString = () => {
  //   // console.log("Image to String to be printed");
  //   // alert(base64Image);
  // };

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
            // setInitialValues(initialValuesObj);
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
            onSubmit={(values) => addItem(values)}
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
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      id="Name"
                      name="name"
                    />
                    {errors.name && touched.name ? (
                      <div className="text-red-500 flex text-base font-semibold ml-20">
                        {errors.name}
                      </div>
                    ) : null}
                    {/* <ErrorMessage name="name" /> */}

                    <InputCom
                      label="Phone:-"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Mobile Number"
                      id="Phone"
                      name="phone"
                    />
                    {errors.phone && touched.phone ? (
                      <div className="text-red-500 flex text-base font-semibold ml-[90px] ">
                        {errors.phone}
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
                          name="photo"
                          // onChange={(e) =>
                          //   setFieldValue("photo", e.target.files[0])
                          // }
                          // onChange={ImageUploaded}
                          onChange={(e) =>
                            handlePhotoChange(e, setFieldValue, values)
                          }
                          // onClick={displayString}
                          id="photo"
                          value={values.photo}
                          formValues={values}
                        />
                        {errors.photo && touched.photo ? (
                          <div className="text-red-500 grid text-base font-semibold ml-10 ">
                            {errors.photo}
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
                      // onClick={displayString}
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
            {submittedData.map((data, index) => (
              <tr key={index}>
                {/* <td>{data.id}</td> */}
                <td className="pl-6">{data.name}</td>
                <td className="text-start">{data.phone} </td>
                <td className="text-start">{data.address} </td>
                <td className="text-start">{data.gender} </td>
                <td className="text-start">{data.language.join(",")} </td>
                <td className="py-1">
                  {data.photo && (
                    <img
                      // src={data.photo}
                      src={URL.createObjectURL(data.photo)}
                      alt="user"
                      width={45}
                    />
                  )}
                </td>
                <td className="flex justify-center  space-x-2 pt-3 pb-2 ">
                  <button
                    onClick={() => handleEdit(index)}
                    className=" bg-blue-800 hover:bg-green-700 text-white text-[12px] font-normal py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
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

export default Popup;
