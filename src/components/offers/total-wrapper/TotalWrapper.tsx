import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Total } from "./Total";

interface ITotalWrapper {
  className: string|undefined;
}

const TotalWrapper = ({ className }: ITotalWrapper) => {
  const total = useSelector((state:RootState) => state.offers.totalPrice);

  return <Total value={total} className={className} />;
};

export default TotalWrapper;
