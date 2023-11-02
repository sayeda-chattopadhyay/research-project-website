const Button = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-light ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
