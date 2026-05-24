import React, { useRef, useState } from 'react'

const Otp = () => {
  const inputSize = 4;
  const [inputValue, setInputValue] = useState("");
  const inpRef = useRef([]);
  const handleChange = (e, index) => {
    if (index + 1 < inputSize && inpRef.current[index + 1]) {
      inpRef.current[index + 1].focus();
    }
  };
  return (
    <>
    <h1 className="text-center text-4xl">OTP Input</h1>
      <div className="my-4 flex justify-center">
        {Array.from({ length: inputSize }).map((_, index) => {
          return (
            <input
              ref={(el) => {
                if (el) inpRef.current[index] = el;
              }}
              key={index}
              type="text"
              className="w-12 h-12 text-center border-2 border-gray-300 rounded mx-1 focus:outline-none focus:border-blue-500"
              maxLength={1}
              onChange={(e) => {
                handleChange(e, index);
              }}
            />
          );
        })}
      </div>
      </>
  )
}

export default otp