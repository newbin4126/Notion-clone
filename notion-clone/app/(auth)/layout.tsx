import { Children } from "react";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full bg-red-500 text-white">{children}</div>;
};

export default Rootlayout;
