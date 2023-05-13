import React from "react";
import { Label } from "reactstrap";

function Input({
  id,
  name,
  label,
  className,
  error,
  register,
  validationOptions,
  ...rest
}) {
  return (
    <div className="mb-4">
      {label && (
        <Label className="form-label" htmlFor={id}>
          {label}
        </Label>
      )}
      <input
        {...rest}
        name={id}
        className={`form-control mb-2 ${className}`}
        {...(register ? { ...register(name, validationOptions) } : {})}
      />
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
}

export default Input;
