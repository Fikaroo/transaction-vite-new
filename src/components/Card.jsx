import { useContext } from "react";
import TransactionContext from "../context/store";
import CardItem from "./CardItem";

const Card = () => {
  const { data, isLoading, isError, error } = useContext(TransactionContext);
  if (isLoading) {
    return (
      <span className="px-10 py-2 bg-white text-gray-900 font-semibold text-xl rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Loading...
      </span>
    );
  }

  if (isError) {
    return (
      <span className="px-10 py-2 bg-white text-gray-900 font-semibold text-xl rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Error: {error.message}
      </span>
    );
  }

  if (data.length === 0) {
    return (
      <span className="px-10 py-2 bg-white text-gray-900 font-semibold text-xl rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        No Transaction
      </span>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-16 px-8">
      {data.map((transaction) => (
        <CardItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
};

export default Card;
