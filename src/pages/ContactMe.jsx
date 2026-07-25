import Container from "../components/Container";
import SocialLinks from "../components/SocialLinks";
import { contactSocialIds } from "../data/socials";

const ContactMe = () => {
  return (
    <Container className="flex flex-col gap-8 pb-24 pt-28 md:pt-32">
      <h1 className="text-headline font-semibold">Contact Details</h1>
      <SocialLinks ids={contactSocialIds} size="lg" className="gap-4" />
    </Container>
  );
};

export default ContactMe;
