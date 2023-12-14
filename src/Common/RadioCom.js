// import React from "react";

// export const RadioCom = ({ label, id,  onChange, name, options,checked }) => {
//   return (
//     <div className="flex">
//       <p className="font-semibold mr-3 mt-4 text-base  text-gray-900 dark:text-white">
//         Gender:-
//       </p>
//       {options.map((Radiooptions) => (
//         <div key={Radiooptions.value}>
//           <label
//             htmlFor={id}
//             className="ml-2 mr-2 text-md text-gray-900 dark:text-white"
//           >
//             {Radiooptions.label}

//           <input
//             type="radio"
//             className="text-black ml-1 w-3 h-3 mt-5 focus:border-black outline-none border-b-2 border-gray-500 "
//             name={name}
//             value={Radiooptions.value}
//             onChange={onChange}
//             // checked={checked}
//           />
//             </label>
//         </div>
//       ))}
//     </div>
//   );
// };

// RadioCom.js

import { Field } from "formik";
import React from "react";

const RadioCom = ({ options, label, id, name, selectedValue, onChange }) => {
  return (
    <div className="flex mt-2">
      <p className="font-semibold mr-3 text-base text-gray-900 dark:text-white">
        {label}
      </p>
      {options.map((option) => (
        <div key={option.value}>
          <label
            htmlFor={option.value}
            className="ml-2 mr-2 text-md text-gray-900 dark:text-white"
          >
            {option.label}
          </label>
          <Field
            type="radio"
            className="text-black mr-5 w-3 h-3 mt-2 focus:border-black outline-none border-b-2 border-gray-500"
            id={option.value}
            name={name}
            value={option.value}
            onChange={onChange}
            // required
            checked={selectedValue === option.value}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioCom;
