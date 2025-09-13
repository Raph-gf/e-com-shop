import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="w-full absolute z-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1.5px] p-8 rounded-xl border-none"
    >
      <div className="flex flex-col items-center gap-2 text-7xl w-full absolute z-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1.5px] p-8 rounded-xl border-none">
        <h1 className="text-7xl">Make Your Interior More</h1>
        <h2>Minimalist & Modern</h2>
        <div className="flex flex-col text-center">
          <span className="text-lg">Turn your room into a lot more minimalist</span>
          <span className="text-lg">and modern with ease and speed</span>
        </div>
      </div>
    </motion.div>
  );
}
