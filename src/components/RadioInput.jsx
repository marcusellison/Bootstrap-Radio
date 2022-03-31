import "./RadioInput.css";

// self-note * adding h-100 here reason: multiple radio inputs will have different heights depending on badge text.
// this makes it so all will radio inputs will have same height

// no state used - radios have a checked state property, so using CSS to target check label and add styling
const RadioInput = ({
  value,
  className = "w-100 text-center bg-white bg-opacity-10 p-1 p-md-3 h-100",
  children
}) => {
  return (
    <div className="h-100">
      <input
        // self-note * used these two classnames to make radio disappear, but keep the accessible
        // benefits: can still use keyboard to go up, down, left, right
        className="position-fixed opacity-0"
        id={value}
        type="radio"
        name="factor"
        value={value}
      />
      <label htmlFor={value} className={className}>
        {children}
      </label>
    </div>
  );
};

export default RadioInput;
