const Button = ({ children, onClick, className = "", type = "button", disabled = false }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-gray-500 text-white font-bold rounded-md px-4 py-2 ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;