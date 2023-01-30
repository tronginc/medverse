import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return <div className={clsx("w-full max-w-[1368px] mx-auto", className)}>{children}</div>;
}
