const Card = ({ className, children }) => {
  return (
    <div className={`flex flex-col bg-offwhite gap-6 p-6 lg:p-8 border-4 border-offblack shadow-[6px_6px_0_#2c2c2c] rounded-3xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;
