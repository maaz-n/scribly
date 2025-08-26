'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

export default function FAQsFour() {
  const faqItems = [
  {
    id: "item-1",
    question: "How do I start writing?",
    answer:
      "Just sign up, and click 'Create Post' to begin writing.",
  },
  {
    id: "item-2",
    question: "Is it free to use?",
    answer:
      "Yes, Scribly is completely free to use for writing and publishing your blogs.",
  },
  {
    id: "item-3",
    question: "Can I format my posts?",
    answer:
      "Of course! Our rich text editor lets you add headings, lists, links, and more.",
  },
  {
    id: "item-4",
    question: "Who can read my blogs?",
    answer:
      "Anyone can read your published posts by visiting your blog link.",
  },
  {
    id: "item-5",
    question: "Do I need coding skills?",
    answer:
      "Not at all. Scribly is built to be simple and user-friendly for everyone.",
  },
]


  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about our platform, services, and features.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
          >
            {faqItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group"
              >
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
