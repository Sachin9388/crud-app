import { Field } from "formik";
import React from "react";

export const CheckboxCom = ({ name, options, selectedValue, onChange, id }) => {
  return (
    <>
      <div>
        <p className="font-semibold mr-31 mt-1 mb-2 text-base  text-gray-900">
          {name}
        </p>
        <div className="">
          <div className="w-48 mt-5 mr-10 text-sm font-medium text-gray-900 border border-gray-600 rounded-lg">
            <div className="w-full  border-gray-600 rounded-t-lg">
              <div className="ml-2 items-center pl-3">
                {options.map((option) => (
                  <div key={option.value}>
                    <label className="flex w-full py-3 space-x-6  text-md font-medium text-gray-900 dark:text-gray-300">
                      <Field
                        type="checkbox"
                        value={option.value}
                        name={name}
                        onChange={onChange}
                        checked={selectedValue.includes(option.value)}
                        id={id}
                        // required
                        className="w-4 h-4 border-b-4 mr-2 bg-gray-100 border-gray-300 rounded"
                      />
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
