import { Field } from "formik";
import React from "react";

export const InputCom = ({ label, name, id, value, onChange, placeholder }) => {
  return (
    <>
      <div className="flex mt-5">
        <label
          htmlFor={label}
          className="font-semibold mr-3 text-base  text-gray-900 dark:text-white"
        >
          {label}
        </label>

        <Field
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          id={id}
          name={name}
          className="text-black ml-4 focus:border-black outline-none border-b-2 border-gray-500 w-full"
          // required
        />
      </div>
    </>
  );
};
