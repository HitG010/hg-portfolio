import { Loader as LoaderIcon } from "lucide-react";
import loaderVid from "../assets/NNLoader.mp4";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-darkBg">
      <div className="flex flex-col items-center">
        {/* <LoaderIcon className="animate-spin w-10 h-10" />
        <p className="mt-4 text-lg font-medium">Loading...</p> */}
        <video
          id="loader-video"
          autoPlay
          muted
          loop
          className="h-[50%] w-[40%] filter"
        >
          <source src={loaderVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Loader;
