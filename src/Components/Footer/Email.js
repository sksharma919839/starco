import axios from "axios";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

function Email() {
  const [data, setData] = useState({
    email: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setMessage("Form Submited Successfuly");
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/email/", data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setTimeout(() => {
      window.location.reload();
    }, 10000);
  };
  return (
    <>
      <div className="flex items-center mb-[50px]">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={data.email}
            placeholder="Enter Your Email"
            className="bg-transparent w-[300px] py-[10px] border-b border-b-[#6e6e6e]  focus:border-b-[#6e6e6e] text-[#f6f6f6]"
          />
          <button type="submit">
            <IoIosSend size={21} />
          </button>
        </form>
      </div>
    </>
  );
}

export default Email;
