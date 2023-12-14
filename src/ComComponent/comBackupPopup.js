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
import { useFormik } from "formik";

export const Popup = ({ onChange, onClick }) => {
  // const [open, setOpen] = useState(false);
  const [size, setSize] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState([]);
  const [file, setFile] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  // console.log("data in checkbox",language);

  // const [photo, setPhoto] = useState("");
  // const [edittedData, setEdittedData] = useState([]);
  // const [title, setTitle] = useState(null);

  useFormik({
    // initialValues:initialValues,
    onSubmit:(values) => {

    }
  });

  const handleOpen = (value) => {
    setSize(value);
  };
  const Radiooptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];
  const Checkboxoptions = [
    { label: "English", value: "English" },
    { label: "Gujrati", value: "Gujrati" },
  ];

  const handleSubmit = () => {
    if (
      (name === "",
      phone === "",
      address === "",
      gender === "",
      language === "",
      file === "")
    ) {
      return;
    }
    if (editIndex !== null) {
      const updatedData = [...submittedData];
      // updatedData[editIndex].list.id = list.id;
      updatedData[editIndex].name = name;
      updatedData[editIndex].phone = phone;
      updatedData[editIndex].address = address;
      updatedData[editIndex].gender = gender;
      updatedData[editIndex].language = language;
      updatedData[editIndex].file = file;
      // updatedData[editIndex].photo = photo;
      setSubmittedData(updatedData);
      setName("");
      setPhone("");
      setAddress("");
      setGender("");
      setLanguage("");
      setFile("");
      setEditIndex(null);
      handleOpen(null);
      // console.log(updatedData);
    } else {
      setSubmittedData([
        ...submittedData,
        {
          /*id: new Date(),*/ name,
          phone,
          address,
          gender,
          language,
          file,
        },
      ]);
      handleOpen(null);
      setName("");
      setPhone("");
      setAddress("");
      setGender("");
      setLanguage("");
      setFile("");
      // console.log(...submittedData);
    }
  };

  // const handleInputChange = (event) => {
  //   setList({
  //     ...list,
  //     name: event.target.value,
  //   });
  // // Update the name state with input value
  // };
  // const handleRadioChange = (event) => {
  //   setGender(event.target.value);
  // };

  const handleEdit = (index) => {
    const tableData = submittedData[index];

    setName(tableData.name);
    setPhone(tableData.phone);
    setAddress(tableData.address);
    setGender(tableData.gender);
    setLanguage(tableData.language);
    setFile(tableData.file);
    setEditIndex(index);
    handleOpen(null);
    // console.log(tableData);
    // handleOpen("sm");
  };

  // const handleLanguageChange = (value) => {
  //   if (!language.includes(value)) {
  //     setLanguage([...language, value]);
  //   }
  // };

  // const handleLanguageChangeRemove = (value) => {
  //   setLanguage(language.filter((lang) => lang !== value));
  // };

  // const handleCheckboxChange = (event) => {
  //   const value = event.target.value;
  //   if (!language.includes(value)) {
  //     setLanguage([...language, value]);
  //   } else {
  //     setLanguage(language.filter((lang) => lang !== value));
  //   }
  // };

  const handleDelete = (index) => {
    const filterData = submittedData.filter((data, i) => i !== index);
    setSubmittedData(filterData);
    // console.log(filterData);
  };

  const handleCancel = () => {
    setName("");
    setPhone("");
    setAddress("");
    setGender("");
    setLanguage([]);
    setFile("");
    setEditIndex(null);
    handleOpen(null);
  };

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
          className="rounded-xl"
          open={size === "sm" || editIndex !== null}
          handler={() => {
            handleOpen(null);
            setEditIndex(null);
          }}
          animate={{
            mount: { scale: 0.7, x: 0 },
            unmount: { scale: 0.9, x: 100 },
          }}
          size={size || "sm"}
        >
          <DialogHeader className="text-lg font-semibold border-b-2 border-gray-500 text-blue-300">
            {editIndex !== null
              ? "Update Your Schedule"
              : "Create Your Schedule"}
          </DialogHeader>
          <DialogBody>
            <form className="relative">
              <InputCom
                label="Name:-"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter Your Name"
                // id="Name"
                required
              />

              <InputCom
                label="Phone:-"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Enter Your Number"
                // id="Phone"
                required
              />

              <InputCom
                label="Address:-"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Enter Your Address"
                // id="Address"
                required
              />

              <RadioCom
                options={Radiooptions}
                label="Gender:-"
                name="Gender"
                selectedValue={gender}
                onChange={(event) => setGender(event.target.value)}
              />

              <div className="flex">
                <CheckboxCom
                  label="Language"
                  options={Checkboxoptions}
                  name="Languages"
                  selectedValue={language}
                  onChange={(event) => {
                    const value = event.target.value;
                    setLanguage((prevLanguage) => {
                      if (!prevLanguage.includes(value)) {
                        return [...prevLanguage, value];
                      } else {
                        return prevLanguage.filter((lang) => lang !== value);
                      }
                    });
                  }}
                />

                <ImageCom
                  acceptedFileTypes={[
                    "image/jpeg",
                    "image/png",
                    "application/pdf",
                    " application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    "application/vnd.ms-excel",
                  ]}
                  name="file"
                  onChange={onChange}
                  onClick={onClick}
                  id="file"
                  file={file}
                  setFile={setFile}
                />
              </div>
            </form>
          </DialogBody>
          <DialogFooter>
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
              onClick={() => handleSubmit()}
              className=" hover:text-white hover:bg-green-900 bg-green-600"
            >
              {editIndex !== null ? "Update" : "Submit"}
            </Button>
          </DialogFooter>
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
                <td className="text-start">{data.language} </td>
                <td className="py-1">
                  {data.file && (
                    <img
                      src={URL.createObjectURL(data.file)}
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
