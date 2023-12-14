import { Field } from "formik";
import React from "react";

export const ImageCom = ({
  name,
  onChange,
  onClick,
  value,
  id,
  image,
  formValues,
  acceptedFileTypes,
}) => {
  // console.log("VALUE DATA:", value);
  // console.log("FORMVALUES DATA:",formValues );

  return (
    <>
      <div className="grid">
        <label
          htmlFor="image"
          className="relative mt-5 ml-10 w-80 h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-800"
        >
          <Field
            accept={acceptedFileTypes}
            className="hidden"
            type="file"
            name={name}
            value=""
            id={id}
            // required
            onChange={onChange}
          />
          <div className="flex flex-col items-center justify-center h-10">
            {formValues.image &&
              (formValues.image.type === "application/pdf" ? (
                <img src="./icons8-pdf-100.png" className="mt-28" alt="PDF" />
              ) : formValues.image.type ===
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
                formValues.image.type === "application/vnd.ms-excel" ? (
                <img
                  src="./icons8-excel-100.png"
                  className="mt-28 mr-3"
                  alt="Excel"
                />
              ) : (
                <img
                // src={URL.createObjectURL(formValues.image)}
                src={formValues.image}
                alt="Selected"
                  className=" mt-32 w-24 h-24"
                />
              ))}
            {formValues.image ? null : (
              <div className="mt-28">
                <svg
                  className="w-8 h-8 ml-20  text-gray-600 dark:text-gray-600"
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
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
              </div>
            )}
            {formValues.image && (
              <button
                onClick={onClick}
                className="  bottom-2 mt-3 bg-black text-white text-[9px] font-thin px-1 py-1 rounded-md"
              >
                Remove
              </button>
            )}
          </div>
          {/* )} */}
        </label>
      </div>
    </>
  );
};
