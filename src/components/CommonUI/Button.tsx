import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = {
  outlined?: boolean;
};

const Button: React.FC<PropsWithChildren<Props>> = ({ children, outlined }) => {
  return (
    <button
      className={clsx(
        "py-2.5 lg:py-3 px-[50px] lg:px-[55px] rounded-[6px]",
        outlined ? "border border-1 border-[#2C79E1]" : "bg-[#2C79E1]",
        "text-white text-[14px] lg:text-[15px] font-semibold whitespace-nowrap"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
