'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

export default function FAQsFour() {
  const faqItems = [
    {
      id: "item-1",
      question: "How do I create a blog post?",
      answer:
        "Simply sign up, go to your dashboard, and click 'New Post'. You can write, format, and publish your content instantly.",
    },
    {
      id: "item-2",
      question: "Is there a cost to use the platform?",
      answer:
        "Our basic plan is completely free. Premium features like advanced analytics and custom domains are available on paid plans.",
    },
    {
      id: "item-3",
      question: "Can I customize the look of my blog?",
      answer:
        "Yes, you can choose from multiple themes, customize colors, and even add your own branding for a unique style.",
    },
    {
      id: "item-4",
      question: "Do you support collaborations?",
      answer:
        "Absolutely. You can invite co-authors, manage roles, and collaborate on drafts seamlessly with real-time updates.",
    },
    {
      id: "item-5",
      question: "Is my content secure?",
      answer:
        "We use industry-standard encryption and regular backups to make sure your content is always safe and accessible.",
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
