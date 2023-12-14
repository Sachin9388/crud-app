import apiEndpont from "./apiEndpoint";
import commonApi from "./commonApi";

export const getAPI = async () => {
  // console.log("action");
  try {
    const getAPIdata = await commonApi.get(apiEndpont.get);
    // console.log("Get API Data", getAPIdata);
    return getAPIdata;
  } catch (error) {
    console.error("Error:", error);

    if (error.response) {
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      console.error("Request made but no response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
  }
};

export const postAPI = async (data) => {
  console.log("Post Data", data);
  try {
    const postAPIdata = await commonApi.post(apiEndpont.post, data);
    console.log("Post API Data:", postAPIdata);
    return postAPIdata;
  } catch (error) {
    console.log(error);

    if (error.response) {
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      console.error("Request made but no response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
  }
};

export const updateAPI = async (data) => {
  console.log("UPDATE DATA:", data);
  try {
    const updateAPIdata = await commonApi.update(apiEndpont.put, data);
    console.log("UPDATE API Data:", updateAPIdata);
    return updateAPIdata;
  } catch (error) {
    console.log(error);

    if (error.response) {
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      console.error("Request made but no response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
  }
};

export const deleteAPI = async (userId) => {
  const id = userId?.payload;
  console.log("Delete Data:", id);
  try {
    const deleteAPIdata = await commonApi.delete(apiEndpont.delete, id);
    console.log("Delete Api Data:", deleteAPIdata);
    return deleteAPIdata;
  } catch (error) {
    console.error("Error:", error);

    if (error.response) {
      console.error("Response data:", error.response);
    } else if (error.request) {
      console.error("Request made but no response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
  }
};
