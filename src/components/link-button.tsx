import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function LinkButton({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-2 text-sm text-orange-400">
      {text} <ArrowRightIcon className="w-4 h-4" />
    </span>
  );
}
