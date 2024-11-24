/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint }) => {

  return (
    <div className="input">
      <label htmlFor="input" >
        {hint}
      </label>
      <input
        type="text"
        id="input"
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Input;

