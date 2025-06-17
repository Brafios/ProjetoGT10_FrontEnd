
import { forwardRef } from "react";

const FormInput = forwardRef(({ label, id, type = "text", children, ...rest }, ref) => {
  return (
    <div className="mb-4 w-full">
      {label && (
        <label htmlFor={id} className="font-serif font-bold mb-1 block">
          {label}
        </label>
      )}
      {children && <div className="flex justify-between items-center mb-1">{children}</div>}
      <input
        id={id}
        type={type}
        className="bg-white text-center h-10 rounded w-full"
        ref={ref}
        {...rest}
      />
    </div>
  );
});

export default FormInput;