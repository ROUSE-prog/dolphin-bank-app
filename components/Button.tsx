interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary"
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  