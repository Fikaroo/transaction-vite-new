import { Input } from "@material-tailwind/react";
import React from "react";

const UserInput = ({ label, value, setState, color, size, type }) => {
  return (
    <div>
      <Input
        type={type}
        size={size}
        label={label}
        value={value}
        color={color}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default UserInput;
