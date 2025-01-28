import axios from "axios";
import React, { useState } from "react";

function Forms() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
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
      const response = await axios.post("http://localhost:8000/contact/", data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <>
      <div className="bg-[#000000] p-[48px] mt-[40px] rounded-2xl mx-[15px]">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="contact-input">
              <input
                type="name"
                name="name"
                onChange={handleChange}
                value={data.name}
                id="name"
                placeholder="Full Name *"
                className="lg:w-[428px] w-[255px] bg-transparent text-[#f5f5f7] py-[10px] border-b border-b-[#6e6e6e] px-[10px] "
                required
              />
            </div>
            <div className="contact-input mt-[40px]">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                id="email"
                placeholder="Enter your email Here *"
                className="lg:w-[428px] w-[255px] bg-transparent text-[#f5f5f7] py-[10px] border-b border-b-[#6e6e6e] px-[10px] "
                required
              />
            </div>
            <div className="contact-input mt-[40px]">
              <input
                type="text"
                name="number"
                onChange={handleChange}
                value={data.number}
                id="number"
                placeholder="Enter your Number Here *"
                className="lg:w-[428px] w-[255px] bg-transparent text-[#f5f5f7] py-[10px] border-b border-b-[#6e6e6e] px-[10px] "
                maxLength="10"
                required
              />
            </div>
            <div className=" mt-[40px]">
              <textarea
                type="message"
                id="message"
                name="message"
                onChange={handleChange}
                value={data.message}
                placeholder="Enter your Message Here *"
                className="lg:w-[428px] w-[255px] bg-transparent text-[#f5f5f7] py-[10px] border-b border-b-[#6e6e6e] px-[10px] "
                required
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="mt-[50px] text-[#f5f5f7] bg-[#00A2FF] px-[20px] py-[10px] rounded-3xl transition-all duration-500 hover:bg-[#bf8cff]"
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Forms;
