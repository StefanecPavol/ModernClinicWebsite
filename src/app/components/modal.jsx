import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
        <span className="absolute top-2 right-2 p-2 rounded-full h-[30px] w-[30px] flex items-center justify-center cursor-pointer text-xl bg-[#2B567F] text-gray-50" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal