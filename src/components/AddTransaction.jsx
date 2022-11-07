import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import UserInput from "./UserInput";
import { addTransaction } from "../utils/updateTransaction";
import TransactionContext from "../context/store";
const AddTransaction = () => {
  const { setStatus } = useContext(TransactionContext);
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const handleOpen = () => setOpen(!open);
  const handleSaveTransaction = () => {
    addTransaction({ from, to, amount });
    setStatus(201);
    setOpen(!open);
  };
  return (
    <div>
      <Button onClick={handleOpen} variant="gradient">
        Add Transaction
      </Button>
      <Dialog
        className="!max-w-none sm:!max-w-md !w-full absolute -bottom-6 sm:bottom-auto"
        open={open}
        handler={handleOpen}
      >
        <DialogHeader>Add Transaction</DialogHeader>
        <DialogBody className="grid gap-4" divider>
          <UserInput size="lg" label="From" value={from} setState={setFrom} />
          <UserInput value={to} size="lg" label="To" setState={setTo} />
          <UserInput
            value={amount}
            size="lg"
            label="Amount"
            setState={setAmount}
            type="number"
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleSaveTransaction}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AddTransaction;
