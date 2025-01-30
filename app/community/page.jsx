

"use client";
import Nav from '../components/Nav';
import React, { useState } from "react";

const Page = () => {

  const [formvalid, setFormvalid] = useState({ name: "", email: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(""); // New state for plan selection

  const isFormValid = formvalid.name && formvalid.email && formvalid.password && isChecked && selectedPlan;

  const handleChange = (e) => {
    setFormvalid({ ...formvalid, [e.target.name]: e.target.value });
  };

  return (
    <>
      <main>
        <Nav />
        <div className="mt-5">
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-[600px]">
              <div className=' flex items-center justify-center'>

              <h2 className="text-2xl font-bold mb-4 text-slate-700 ">Workindia User Subscripton </h2>
              </div>

              <form className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formvalid.name}
                    placeholder="Enter Your Name"
                    className="w-full border p-2 rounded-md"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formvalid.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="w-full border p-2 rounded-md"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="block font-medium text-slate-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formvalid.password}
                    onChange={handleChange}
                    placeholder="Enter valid password"
                    className="w-full border p-2 rounded-md text-slate-700"
                    required
                  />
                </div>

                {/* Choose a Plan */}
                <div>
                  <label className="block font-medium mb-2 text-slate-700">Choose a Plan</label>
                  <div className="flex space-x-4">
                    {/* Monthly Plan */}
                    <button
                      type="button"
                      className={`p-3 w-1/2 rounded-md font-bold flex flex-col items-center justify-center ${
                        selectedPlan === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                      }`}
                      onClick={() => setSelectedPlan("monthly")}
                    >
                      <span>Monthly</span>
                      <span className="text-sm font-normal">$10/month</span>
                    </button>

                    {/* Yearly Plan */}
                    <button
                      type="button"
                      className={`p-3 w-1/2 rounded-md font-bold flex flex-col items-center justify-center ${
                        selectedPlan === "yearly" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                      }`}
                      onClick={() => setSelectedPlan("yearly")}
                    >
                      <span>Yearly</span>
                      <span className="text-sm font-normal">$100/year</span>
                    </button>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="mr-2"
                  />
                  <label className=' text-slate-800'>I agree to the terms and conditions</label>
                </div>

                {/* Subscribe Button */}
                <button
                  type="submit"
                  className={`w-full p-2 rounded-md text-white font-bold ${
                    isFormValid ? "bg-blue-900 hover:bg-black text-white" : "bg-[#c07dea] cursor-not-allowed"
                  }`}
                  disabled={!isFormValid}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
