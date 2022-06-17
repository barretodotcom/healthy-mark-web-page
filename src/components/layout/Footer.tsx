import { FiPhoneCall } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bg-black  w-screen relative  h-48 flex items-center justify-center">
      <div className="absolute ">
        <button className=" feedback-btn bg-cyan-500 p-3 rounded-full flex items-center group">
          <FiPhoneCall className="text-white text-3xl" />

          <span className=" max-w-0 group-hover:max-w-3xl transition-all text-right duration-1000 ">
            <span className="px-2"></span>
            Feedback
            <span className="px-2"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
