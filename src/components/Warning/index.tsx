import "./styles/index.css";

export const Warning = () => {
  return (
    <div className="warning__container">
      <p className="warning_message">
        All words saved here are stored in your browser storage and can be
        deleted if you clear browser data, cookies, etc.
      </p>
    </div>
  );
};
