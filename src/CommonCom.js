import React from "react";

const CommonCom = () => {
  return (
    <>
      <div>
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

        <CheckboxCom
          label="Language"
          options={Checkboxoptions}
          name="Languages"
          selectedValue={language}
          onChange={(event) => setLanguage(event.target.value)}
        />
        <ImageCom
          name="file"
          onChange={onChange}
          onClick={onClick}
          id="file"
          file={file}
          setFile={setFile}
        />
      </div>
    </>
  );
};

export default CommonCom;
