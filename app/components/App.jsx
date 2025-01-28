import {Accordion, AccordionItem} from "@heroui/react";

export default function App() {
  const defaultContent1  =
    "To start hiring, purchase a plan and verify your profile. Then you can begin hiring from WorkIndia.";

  const defaultContent2 = "Once your job post is live, you will start receiving candidate responses through Calls and WhatsApp in your registered mobile number within a few hours."

  const defaultContent3 = "Yes, you can access and contact candidates using our Database feature. You can call, SMS, or WhatsApp candidates. You can also bulk unlock and export candidate profiles to your device directly."


  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        subtitle="How do I start hiring from"
        title="Accordion 1"
      >
        {defaultContent1}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        subtitle="What happens after my job goes live?"
        title="Accordion 2"
      >
        {defaultContent2}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        subtitle="Can I contact candidates myself?"
        title="Accordion 3"
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
}
