import axios from "axios";

const common = "https://simple-crud-node.onrender.com/api";

export default class commonApi {
  static async get(url) {
    try {
      const instance = axios.create({
        baseURL: common,
        headers: {
          Accept: "application/json",
        },
      });

      const response = await instance.get(url);
      // console.log("Get Api Response", response);

      return response;
    } catch (error) {
      console.error("Error Fetching Data", error);
      throw error;
    }
  }

  static async post(url, data) {
    console.log("POST request Data:", data);

    try {
      const instance = axios.create({
        baseURL: common,
        headers: {
          Accept: "application/json",
        },
      });

      const response = await instance.post(url, data);
      console.log("POST response Data:", response?.data);

      return response?.data;
    } catch (error) {
      console.error("Error Posting Data", error);
      throw error;
    }
  }

  static async update(url, data) {
    const id = data?.userId;
    console.log("Updated Data:", id);
    console.log("UPDATE Request Data:", data);
    const instance = axios.create({
      baseURL: common,
      headers: {
        Accept: "application/json",
      },
    });
    try {
      // const editapidata = data?.data
      const response = await instance.put(`${url}/${id}`, data);
      console.log("UPDATE response Data:", response?.data);

      return response?.data;
    } catch (error) {
      console.log("Error Updating Data:", error);
      throw error;
    }
  }

  static async delete(url, id) {
    console.log("DELETE request URL:", id);

    const instance = axios.create({
      baseURL: common,
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      const response = await instance.delete(`${url}/${id}`);
      console.log("DELETE response Data:", response?.data);

      return response?.data;
    } catch (error) {
      console.error("Error Deleting Data", error);
      throw error;
    }
  }
}
