import { SectionHeader } from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long does waterproofing last?", a: "Depending on the system used, our waterproofing typically lasts 8–15 years. We provide a written warranty on every project so you're covered." },
  { q: "Do you offer free site inspection?", a: "Yes. Our team visits your property in Hyderabad at no cost, inspects the affected areas and gives you a detailed report along with a transparent quote." },
  { q: "How long does a typical project take?", a: "A residential terrace or bathroom usually takes 2–5 days. Larger commercial projects are scheduled after inspection to minimise disruption." },
  { q: "What warranty do you provide?", a: "We provide written warranty ranging from 5 to 10 years based on the waterproofing system, materials used and scope of work." },
  { q: "Which areas of Hyderabad do you serve?", a: "We serve all of Hyderabad, Secunderabad and surrounding areas including Shamshabad, Gachibowli, Kondapur, Jubilee Hills, Miyapur, Kukatpally and more." },
  { q: "Do you handle commercial and industrial projects?", a: "Yes. We regularly deliver waterproofing for offices, malls, factories, apartment complexes and government projects." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions? <span className="text-gradient-brand">Answered.</span></>}
          description="Quick answers to the questions we hear most often from homeowners and builders."
        />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`i${i}`}
              className="rounded-2xl border border-border bg-white px-5 shadow-sm data-[state=open]:shadow-brand transition-shadow"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-brand hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}