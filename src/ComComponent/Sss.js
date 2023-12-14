import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export const Sss = () => {
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
  const handleOpen = (value) => {
    setSize(value);
  };

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
      //   console.log(...submittedData);
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
  const handleLanguageChange = (value) => {
    if (!language.includes(value)) {
      setLanguage([...language, value]);
    }
  };

  const handleLanguageChangeRemove = (value) => {
    setLanguage(language.filter((lang) => lang !== value));
  };

  const handleDelete = (index) => {
    const filterData = submittedData.filter((data, i) => i !== index);
    setSubmittedData(filterData);
    // console.log(filterData);
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
            mount: { scale: 0.8, x: 0 },
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
            <div className="relative">
              <div className="flex">
                <label
                  htmlFor="Name"
                  className="font-semibold mr-3 text-base  text-gray-900 dark:text-white"
                >
                  Name:-
                </label>
                <input
                  type="text"
                  className="text-black ml-5  focus:border-black outline-none border-b-2 border-gray-500 w-full"
                  placeholder="Enter Your Name"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  id="Name"
                  required
                />
              </div>
              <div className="flex mt-5">
                <label
                  htmlFor="Phone"
                  className="font-semibold mr-3 text-base  text-gray-900 dark:text-white"
                >
                  Phone:-
                </label>
                <input
                  type="text"
                  className="text-black ml-4 focus:border-black outline-none border-b-2 border-gray-500 w-full"
                  placeholder="Enter your Number"
                  onChange={(event) => setPhone(event.target.value)}
                  value={phone}
                  id="Phone"
                  required
                />
              </div>
              <div className="flex mt-5">
                <label
                  htmlFor="Address"
                  className="font-semibold mr-3 text-base  text-gray-900 dark:text-white"
                >
                  Address:-
                </label>
                <input
                  type="text"
                  className="text-black  focus:border-black outline-none border-b-2 border-gray-500 w-full"
                  placeholder="Enter your Address"
                  onChange={(event) => setAddress(event.target.value)}
                  value={address}
                  id="Address"
                  required
                />
              </div>
              <div className="flex mt-2">
                <label
                  htmlFor="Gender"
                  className="font-semibold mr-3 text-base  text-gray-900 dark:text-white"
                >
                  Gender:-
                </label>
                <label
                  htmlFor="Male"
                  className="ml-2 mr-2 text-md text-gray-900 dark:text-white"
                >
                  Male
                </label>
                <input
                  type="radio"
                  className="text-black mr-5 w-3 h-3 mt-2 focus:border-black outline-none border-b-2 border-gray-500 "
                  id="Male"
                  name="gender"
                  value="Male"
                  onChange={(event) => setGender(event.target.value)}
                  required
                  checked={gender === "Male"} // Check the radio button if gender is Male
                />
                <label
                  htmlFor="Female"
                  className="ml-2 mr-2 text-md text-gray-900 dark:text-white"
                >
                  Female
                </label>
                <input
                  type="radio"
                  className="text-black mr-5 w-3 h-3 mt-2 focus:border-black outline-none border-b-2 border-gray-500 "
                  id="Female"
                  name="gender"
                  value="Female"
                  onChange={(event) => setGender(event.target.value)}
                  required
                  checked={gender === "Female"} // Check the radio button if gender is Female
                />
                <label
                  htmlFor="Other"
                  className="ml-2 mr-2 text-md text-gray-900 dark:text-white"
                >
                  Other
                </label>
                <input
                  type="radio"
                  className="text-black mr-5 w-3 h-3 mt-2 focus:border-black outline-none border-b-2 border-gray-500 "
                  id="Other"
                  name="gender"
                  value="Other"
                  onChange={(event) => setGender(event.target.value)}
                  required
                  checked={gender === "Other"} // Check the radio button if gender is Other
                />
              </div>
              <div className="flex">
                <div className=" mt-2">
                  <label
                    htmlFor="Language"
                    className="font-semibold mr-31 mt-1 mb-2 text-base  text-gray-900 dark:"
                  >
                    Language
                  </label>
                  <div className="w-48 mt-5 h-[92px] mr-10 text-sm font-medium text-gray-900 border border-gray-600 rounded-lg">
                    {["English", "Gujrati"].map((lang) => (
                      <div
                        key={lang}
                        className="w-full border-b border-gray-600 rounded-t-lg"
                      >
                        <div className="flex items-center pl-3">
                          <input
                            id={lang}
                            type="checkbox"
                            value={lang}
                            onChange={(event) =>
                              event.target.checked
                                ? handleLanguageChange(lang)
                                : handleLanguageChangeRemove(lang)
                            }
                            className="w-4 h-4  bg-gray-100 border-gray-300 rounded"
                            checked={language.includes(lang)} // Check if the language is in the selected languages
                          />
                          <label
                            htmlFor={lang}
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {lang}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid ">
                  <label
                    htmlFor="file"
                    className="relative mt-5 ml-10 w-80 h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-800"
                  >
                    <input
                      className="hidden"
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    {file ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt="Selected"
                        // width="30%"
                        className="ml-[33%] mt-5 w-24 h-24"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-10">
                        <svg
                          className="w-8 h-8 mt-28 text-black dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                      </div>
                    )}
                    {file && (
                      <button
                        onClick={() => setFile(null)} // Add this to clear the selected file
                        className=" ml-[40%] mt-2 bottom-2 bg-black text-white text-[9px] font-thin px-1 py-1 rounded-md"
                      >
                        Remove
                      </button>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              // variant="text"
              color="red"
              onClick={() => handleOpen(null)}
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

export default Sss;
