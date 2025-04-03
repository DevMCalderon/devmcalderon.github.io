import { useContext } from "react";

import { PortfolioContext } from "@/context/PortfolioContext";

const usePortfolioContext = () => {
  return useContext(PortfolioContext);
};

export default usePortfolioContext;