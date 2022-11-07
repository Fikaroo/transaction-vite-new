import Card from "./components/Card";
import { useQuery } from "react-query";
import axios from "axios";
import TransactionContext from "./context/store";
import { useState } from "react";
import TransactionAlert from "./components/TransactionAlert";
import AddTransaction from "./components/AddTransaction";
import { Button, IconButton, Input } from "@material-tailwind/react";
import UserInput from "./components/UserInput";

const getData = async (from, to) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  let res;

  if (from && to) {
    res = await axios.get(`${baseUrl}?from=${from}&to=${to}`);
  } else if (from) {
    res = await axios.get(`${baseUrl}?from=${from}`);
  } else if (to) {
    res = await axios.get(`${baseUrl}?to=${to}`);
  } else {
    res = await axios.get(baseUrl);
  }
  return res.data;
};

const App = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const { data, isLoading, isError, error, refetch } = useQuery(
    "transactionData",
    () => getData(from, to)
  );
  const [status, setStatus] = useState(0);

  const handleReflesh = async () => {
    setFrom("");
    setTo("");

    setTimeout(() => {
      refetch();
    }, 200);
  };

  return (
    <TransactionContext.Provider
      value={{ data, isLoading, isError, error, setStatus }}
    >
      <div className="w-full min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 overflow-y-hidden">
        {/* <SelectInput /> */}
        {status !== 0 && <TransactionAlert status={status} />}
        <div className=" w-full mt-8 px-10 ">
          <div className="bg-blue-gray-50 flex flex-col gap-4 lg:flex-row justify-between  px-16 py-6 rounded-lg shadow-xl items-center">
            <div className="grid md:grid-cols-2 justify-items-center lg:flex gap-4">
              <UserInput
                size="lg"
                color="purple"
                label="From"
                value={from}
                setState={setFrom}
              />
              <UserInput
                value={to}
                size="lg"
                color="indigo"
                label="To"
                setState={setTo}
              />
              <Button
                className="bg-gradient-to-tl from-indigo-500 to-purple-600"
                size="md"
                onClick={() => refetch()}
              >
                Search
              </Button>
              <IconButton onClick={handleReflesh} size="lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </IconButton>
            </div>
            <AddTransaction />
          </div>
        </div>
        <Card />
      </div>
    </TransactionContext.Provider>
  );
};

export default App;
