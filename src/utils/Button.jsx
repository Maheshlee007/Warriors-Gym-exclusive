import { useNavigate } from "react-router-dom";

const Button = ({ text }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-lime-500 text-black font-bold  p-3  rounded-xl sm:my-6"
      onClick={() => navigate("/pricing")}
    >
      {text}
    </button>
  );
};

export default Button;
