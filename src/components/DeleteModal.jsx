import { Button } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import TransactionContext from "../context/store";

const DeleteModal = ({ id, setDelete }) => {
  const { setStatus } = React.useContext(TransactionContext);
  const handleDelete = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const res = await axios.delete(`${baseUrl}/${id}`);
    setStatus(res.status);
  };
  return (
    <div className="w-full px-4 sm:px-8 absolute transform left-1/2 top-12 -translate-x-1/2 text-gray-900 z-50 ">
      <div className="flex w-full rounded-2xl justify-center items-center mx-auto px-2 text-center py-4 sm:py-6 mt-4 text-sm sm:text-md font-medium bg-white flex-col bg-opacity-70  backdrop-blur">
        <h2 className="text-lg sm:text-2xl font-bold mb-6">
          Transaction Delete
        </h2>
        <p className="mb-4">
          Are you sure you want to delete this transaction?
        </p>
        <div className="flex gap-4 py-4 flex-col sm:flex-row">
          <Button
            color="red"
            className="py-2 px-2 sm:text-sm sm:py-2.5 sm:px-6"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            className="py-2 px-2 sm:text-sm sm:py-2.5 sm:px-6"
            onClick={() => setDelete(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
