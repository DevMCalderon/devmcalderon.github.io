import { useContext } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";

const useControl = () => {
  return useContext(PortfolioContext);
};

export default useControl;