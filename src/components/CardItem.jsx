import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  IconButton,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import TransactionContext from "../context/store";
import { updateTransaction } from "../utils/updateTransaction";
import DeleteModal from "./DeleteModal";
import UserInput from "./UserInput";
const CardItem = ({ transaction }) => {
  const { setStatus } = useContext(TransactionContext);
  const { id, from, to, amount } = transaction;
  const [userFrom, setFrom] = useState(from || "Anonymous");
  const [userTo, setTo] = useState(to || "Anonymous");
  const [userAmount, setAmount] = useState(amount || 0);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  return (
    <Card className=" bg-blue-gray-50 shadow-xl relative text-white">
      {isDelete && <DeleteModal id={id} setDelete={setIsDelete} />}
      <CardHeader className="bg-tranparent -left-14  top-4 p-6" shadow={false}>
        <span className="px-6 font-semibold  py-2 rounded-tl-xl rounded-br-xl rounded-sm  top-0 left-0 bg-gradient-to-bl from-deep-purple-400 via-indigo-400 to-light-blue-600 shadow-xl text-white text-sm">
          {id}
        </span>
      </CardHeader>
      <CardBody className="flex flex-col gap-8 px-8 z-20">
        <div className="flex absolute right-6 -top-4 gap-6 px-0.5">
          {!isEdit ? (
            <>
              <IconButton
                disabled={isDelete}
                color="light-blue"
                onClick={() => setIsEdit(!isEdit)}
                variant="gradient"
                size="md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </IconButton>
              <IconButton
                color="red"
                variant="gradient"
                size="md"
                onClick={() => setIsDelete(!isDelete)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </IconButton>
            </>
          ) : (
            <Button
              onClick={() => {
                setIsEdit(!isEdit);
                setStatus(
                  updateTransaction(id, {
                    from: userFrom,
                    to: userTo,
                    amount: userAmount,
                  })
                );
              }}
              variant="gradient"
            >
              Done
            </Button>
          )}
        </div>
        <div className="w-full relative shadow-lg text-lg p-4 bg-white text-blue-gray-900 rounded-lg font-medium text-center">
          <Chip
            value="from"
            variant="filled"
            className="absolute left-3/4 -top-4  bg-gradient-to-bl from-deep-purple-400 via-indigo-400 to-light-blue-600 shadow-xl "
          />
          {!isEdit ? (
            `${userFrom}`
          ) : (
            <UserInput label="From" value={userFrom} setState={setFrom} />
          )}
        </div>

        <div className="w-full relative shadow-lg text-lg p-4 bg-white text-blue-gray-900 rounded-lg font-medium text-center">
          <Chip
            value="to"
            variant="filled"
            className="absolute right-3/4 -top-4 bg-gradient-to-tr from-deep-purple-400 via-indigo-400 to-light-blue-600 shadow-xl"
          />
          {!isEdit ? (
            `${userTo}`
          ) : (
            <UserInput label="To" value={userTo} setState={setTo} />
          )}
        </div>
      </CardBody>
      <CardFooter className="mx-auto">
        {!isEdit ? (
          <Chip
            className="backdrop-blur bg-opacity-60 bg-gradient-to-br from-deep-purple-400 via-indigo-400 shadow-lg px-10 py-2 text-base font-semibold"
            value={`${userAmount} $`}
          />
        ) : (
          <div className="w-full relative shadow-lg text-lg p-2 bg-white text-blue-gray-900 rounded-lg font-medium text-center">
            <UserInput label="Amount" value={userAmount} setState={setAmount} />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardItem;
