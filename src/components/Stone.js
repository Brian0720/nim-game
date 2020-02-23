import React from "react";
import Button from "react-bootstrap/Button";

export const Stone = ({ id, label, variant, disabled = false, onClick }) => {
  const onButtonClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <Button variant={variant} onClick={onButtonClick} disabled={disabled}>
      {label}
    </Button>
  );
};
