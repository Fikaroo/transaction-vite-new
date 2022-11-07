import { Alert } from "@material-tailwind/react";
import React, { useState } from "react";

const TransactionAlert = ({ status }) => {
  const [show, setShow] = useState(true);
  console.log(status);
  setInterval(() => {
    setShow(!setShow);
    window.location.reload();
  }, 3000);
  if (status === 200) {
    return (
      <Alert
        className="fixed z-50 top-4 max-w-sm transform flex justify-center pl-12 left-1/2  "
        show={show}
        color="green"
        animate={{
          mount: { y: 0, x: -200 },
          unmount: { y: -100, x: -200 },
        }}
      >
        Transaction successfully deleted
      </Alert>
    );
  }

  if (status === 201) {
    return (
      <Alert
        className="fixed z-50 top-4 max-w-sm transform flex justify-center pl-12 left-1/2 "
        show={show}
        animate={{
          mount: { y: 0, x: -200 },
          unmount: { y: -100, x: -200 },
        }}
      >
        Transaction successfully created
      </Alert>
    );
  }

  if (status === 400) {
    return (
      <Alert
        className="fixed z-50 top-4 max-w-sm transform flex justify-center pl-12 left-1/2 "
        show={show}
        color="red"
        animate={{
          mount: { y: 0, x: -200 },
          unmount: { y: -100, x: -200 },
        }}
      >
        Transaction failed to create
      </Alert>
    );
  }
};

export default TransactionAlert;
