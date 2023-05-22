import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  message?: string;
}
export function Loading({ message }: Props) {
  return (
    <span className="animate-spin">
      <AiOutlineLoading3Quarters />
    </span>
  );
}
