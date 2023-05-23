import React from "react";
import { Label } from "reactstrap";

function Select({
  id,
  name,
  label,
  className,
  error,
  register,
  validationOptions,
  options,
  ...rest
}) {
  return (
    <div className="mb-4">
      {label && (
        <Label className="form-label" htmlFor={id}>
          {label}
        </Label>
      )}
      <select
        {...rest}
        name={id}
        className={`form-control mb-2 ${className}`}
        {...(register ? { ...register(name, validationOptions) } : {})}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
}

export default Select;
