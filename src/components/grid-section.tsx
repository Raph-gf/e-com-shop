import LinkButton from "./link-button";

type GridSectionProps = {
  title: string;
  text: string;
};

export default function GridSection({ title, text }: GridSectionProps) {
  return (
    <div className="flex flex-col gap-4 px-5">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{text}</p>
      <LinkButton text="More infos" />
    </div>
  );
}
