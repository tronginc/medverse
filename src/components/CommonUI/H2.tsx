import { PropsWithChildren } from "react";

type Props = {};

const H2: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <h2 className="text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] font-bold text-white">
      {children}
    </h2>
  );
};

export default H2;
