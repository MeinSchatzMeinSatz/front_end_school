const Button = ({ children, text, color = "black" }) => {
  console.log(text, color);

  return (
    <button
      style={{
        color: color,
      }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
