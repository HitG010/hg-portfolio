import { Loader as LoaderIcon } from "lucide-react";
import loaderVid from "../assets/NNLoader1.mp4";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-bg">
      <div className="flex flex-col items-center">
        {/* <LoaderIcon className="animate-spin w-10 h-10" />
        <p className="mt-4 text-lg font-medium">Loading...</p> */}
        {/* The clip is white line-art on solid black. Screen-blending drops
            the black on the dark theme; on light we invert first and
            multiply, so the artwork sits on the page background either way
            instead of showing as a filled rectangle. */}
        <video
          id="loader-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="h-[60%] w-[50%] invert mix-blend-multiply dark:invert-0 dark:mix-blend-screen"
        >
          <source src={loaderVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Loader;
