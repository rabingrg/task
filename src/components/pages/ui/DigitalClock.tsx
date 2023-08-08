import { useState } from "react";

const DigitalClock = () => {
  const [ctime, setCtime] = useState<string>();

  setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    setCtime(currentTime);
  }, 1000);

  return (
    <div className="w-[20rem] h-40 flex flex-col items-center justify-center">
      <header className="text-red-400 text-xl font-bold">Digital Clock</header>
      <div>
        <h1 className="text-6xl">{ctime}</h1>
      </div>
    </div>
  );
};

export default DigitalClock;
