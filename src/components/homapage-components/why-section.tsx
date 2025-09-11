import GridSection from "../grid-section";

export default function WhySection() {
  return (
    <section className="grid grid-cols-4 gap-8 text-[#1E1E1E] px-[80px] mt-[148px] mx-auto w-full">
      <div className=" flex flex-col text-4xl font-bold pt-6 px-5">
        <span>Why</span>
        <span>Choosing Us</span>
      </div>

      <GridSection
        title="Luxury facility"
        text=" The advantage of hiring a workspace with us is that givees you comfortable
              service and all-around facilities."
      />
      <GridSection
        title="Affordable Price"
        text="You can get a workspace of the highst quality at an affordable price and still
              enjoy the facilities that are oly here."
      />
      <GridSection
        title="Many Choices"
        text=" We provide many unique work space choices so that you can choose the workspace
              to your liking."
      />
    </section>
  );
}
