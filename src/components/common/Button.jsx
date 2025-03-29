const Button = ({ className = "", img, alt = "", label, ...props }) => {
  return (
    <button className={className} {...props}>
      {img && <img src={img} alt={alt} />}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
