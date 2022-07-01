import Hero from "./Hero";
import LiveChannels from "./LiveChannels";

const Main = () => {
  return (
    <div className="absolute left-[64px] xl:left-[220px]">
      <Hero />
      <LiveChannels />
    </div>
  );
}

export default Main;