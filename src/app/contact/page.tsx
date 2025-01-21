/**
 * @file page.tsx
 */
// Import components and utils
import ContactCopy from "../../components/contact-copy";
import ContactForm from "../../components/contact-form";
import { Heading } from "@/components/heading";

// Set metadata
export const metadata = {
  title: "Contact | Del Villal Gardening",
  description: "Ready to transform your outdoor space? Get a free estimate for landscaping, garden maintenance, or commercial services. Call us today or fill out our easy contact form.",
};

export default async function Contact() {
  return (
    <>
      <Heading 
        heading="Contact" 
        backgroundImage={{
          title: 'Side yard with grass',
          description: 'A picture of a side yard with fresh grass that has just been planted, up against a wall beneath an embankment.',
          url: '/banner.webp'
        }} 
      />
      <main>
        <div
          className={
            "text-center component-container component-spacer flex flex-col items-center"
          }
        >
          <div className={"w-3/4 md:w-1/2"}>
            <h1 className={"text-primary pb-7"}>Give us a call</h1>
            <h2 className={"text-primary mb-20"}>(760) 844-5270</h2>
          </div>
        </div>
        {/* <div className='container px-4 mt-10 md:px-6'>
            <ContactCopy />
            <ContactForm />
        </div> */}
      </main>
    </>
  );
}
