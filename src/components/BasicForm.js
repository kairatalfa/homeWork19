import { useRef, useState } from "react";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState(true);

  const inputValue = useRef();
  const lastInputValue = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFirstName(true);
    const firstInputName = inputValue.current.value;
    if (firstInputName.trim().length < 5) {
      setFirstName(false);
    }
    inputValue.current.value = "";
  };

  const onBlueHandler = () => {
    setFirstName(true);
    const lastInput = lastInputValue.current.value;
    if (lastInput.trim().length < 5) {
      setFirstName(false);
    }
  };

  const firstInputName = firstName ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={firstInputName}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input ref={inputValue} type="text" id="name" />
          {!firstName && <p style={{ color: "red" }}>you didn't write ....</p>}
        </div>
      </div>
      <div className={firstInputName}>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" ref={lastInputValue} />
          {!firstName && <p style={{ color: "red" }}>you didn't write ....</p>}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          ref={lastInputValue}
          onBlur={onBlueHandler}
        />
        {!firstName && <p style={{ color: "red" }}>Why did they write? </p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
