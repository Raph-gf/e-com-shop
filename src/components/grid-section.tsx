import { ArrowRightIcon } from "@radix-ui/react-icons";

type GridSectionProps = {
  title: string;
  text: string;
};

export default function GridSection({ title, text }: GridSectionProps) {
  return (
    <div className="flex flex-col gap-4 px-5">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{text}</p>
      <span className="flex items-center gap-2 text-sm text-orange-400">
        More infos <ArrowRightIcon className="w-4 h-4" />
      </span>
    </div>
  );
}
