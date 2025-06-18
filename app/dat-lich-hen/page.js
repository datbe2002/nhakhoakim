"use client";

import React, { useState, useEffect } from "react";

const isValidVietnamesePhone = (phone) => {
  // Vietnamese phone: 10 or 11 digits, starts with 0
  return /^0\d{9,10}$/.test(phone);
};

const AppointmentBooking = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [touched, setTouched] = useState({ name: false, phone: false });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const isNameValid = name.trim() !== "";
    const isPhoneValid = isValidVietnamesePhone(phone);
    setIsFormValid(isNameValid && isPhoneValid);
  }, [name, phone]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (touched.name) {
      validateName(e.target.value);
    }
  };

  const handleNameBlur = () => {
    setTouched((prev) => ({ ...prev, name: true }));
    validateName(name);
  };

  const validateName = (value) => {
    if (!value.trim()) {
      setNameError("Nhập họ tên...");
    } else {
      setNameError("");
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (touched.phone) {
      validatePhone(e.target.value);
    }
  };

  const handlePhoneBlur = () => {
    setTouched((prev) => ({ ...prev, phone: true }));
    validatePhone(phone);
  };

  const validatePhone = (value) => {
    if (!value) {
      setPhoneError("Nhập số điện thoại...");
    } else if (!isValidVietnamesePhone(value)) {
      setPhoneError("Số điện thoại không hợp lệ...");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setShowSuccessModal(true);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    // Reset form fields
    setName("");
    setPhone("");
    setNote("");
    setTouched({ name: false, phone: false });
    setNameError("");
    setPhoneError("");
  };

  return (
    <>
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#f5fafd] to-[#eaf3fa] py-10">
        <div className="text-center mb-8">
          <h2 className="font-extrabold text-gray-800 mb-2 tracking-wide text-3xl sm:text-[26.4px]">
            ĐẶT LỊCH HẸN
          </h2>
          <p className="text-base sm:text-[17.6px] text-gray-700 italic mb-1">
            Vui lòng để lại thông tin, nhu cầu của quý khách.
          </p>
          <p className="text-base sm:text-[17.6px] text-gray-700 italic -mt-2">
            Nha Khoa Kim sẽ liên hệ đến Quý Khách trong vòng{" "}
            <span className="font-bold">3 phút</span>
            <br />
            <span className="text-sm">
              (Tổng đài hỗ trợ làm việc từ{" "}
              <span className="font-bold">7h30-23h30</span> mỗi ngày trừ Lễ,
              Tết)
            </span>
          </p>
        </div>
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Gender */}
            <div className="flex items-center space-x-6 mb-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="232"
                  defaultChecked
                  className="accent-blue-600 w-4 h-4"
                />
                <span className="ml-2 text-blue-700 font-semibold">Anh</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="233"
                  className="accent-blue-600 w-4 h-4"
                />
                <span className="ml-2 text-gray-700 font-semibold">Chị</span>
              </label>
            </div>
            {/* Name & Phone */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-start">
              <div className="flex-1 flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Họ tên..."
                  value={name}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 bg-white placeholder-gray-400 transition-all"
                />
                {nameError && !touched.name && (
                  <span className="text-red-500 text-sm mt-1 ml-1">
                    {nameError}
                  </span>
                )}
              </div>
              <div className="flex-1 flex flex-col">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại..."
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={handlePhoneBlur}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 bg-white placeholder-gray-400 transition-all"
                />
                {phoneError && (
                  <span className="text-red-500 text-sm mt-1 ml-1">
                    {phoneError}
                  </span>
                )}
              </div>
            </div>
            {/* Note */}
            <textarea
              name="note"
              placeholder="Ghi chú (nếu có)..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 bg-white placeholder-gray-400 resize-none transition-all"
            ></textarea>
            {/* Submit Button */}
            <div className="w-full flex justify-center mt-2">
              <button
                type="submit"
                className={`transition text-white font-bold rounded-lg px-8 py-3 flex items-center gap-2 text-lg shadow-lg ${
                  isFormValid
                    ? "bg-[#c9302c] hover:bg-red-800"
                    : "bg-[#d9534f] opacity-60 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                <svg
                  className="w-6 h-6 mr-1 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4.75 8a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 014.75 8zm0 4a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                ĐẶT LỊCH HẸN
              </button>
            </div>
          </form>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-md relative animate-fade-in-down">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-[#005f9d] mb-4 text-center">
              ĐẶT HẸN THÀNH CÔNG
            </h3>
            <div className="text-gray-700 space-y-3">
              <p className="text-base sm:text-[17.6px]">
                Nha Khoa Kim sẽ liên hệ bạn trong vòng 3 phút.
              </p>
              <div>
                <p className="font-bold text-base sm:text-[17.6px]">
                  Thời gian làm việc (trừ ngày Lễ/Tết)
                </p>
                <p className="text-base sm:text-[17.6px]">
                  Thứ 2 ~ Thứ 7: 08h00 ~ 19h30
                </p>
                <p className="text-base sm:text-[17.6px]">
                  Chủ Nhật: 08h00 ~ 16h00
                </p>
              </div>
              <p className="text-base sm:text-[17.6px]">
                Ngoài thời gian làm việc, Nha Khoa Kim sẽ liên hệ vào 8h-9h sáng
                hôm sau.
              </p>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentBooking;
