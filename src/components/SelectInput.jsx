import { Select, Option } from "@material-tailwind/react";
import { useContext } from "react";
import TransactionContext from "../context/store";

const SelectInput = () => {
  const { data, isLoading, isError } = useContext(TransactionContext);
  return (
    <div className="w-72 ">
      {isLoading || isError ? (
        <Select className="bg-white" label="Select Transaction Id" disabled>
          <Option value="1">Loading...</Option>
        </Select>
      ) : (
        <Select className="bg-white" label="Select Transaction Id">
          {data.map((transaction) => (
            <Option key={transaction.id} value={transaction.id}>
              {transaction.id}
            </Option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default SelectInput;
