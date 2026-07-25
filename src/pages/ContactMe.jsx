import SocialLinks from "../components/SocialLinks";
import { contactSocialIds } from "../data/socials";

const ContactMe = () => {
  return (
    <div className="px-4 container mx-auto flex flex-col gap-8 mt-24 w-full md:w-[80%] lg:w-[60%]">
      <h1 className="text-2xl font-semibold mt-8">Contact Details</h1>
      <SocialLinks ids={contactSocialIds} size="lg" className="gap-4" />
    </div>
  );
};

export default ContactMe;
