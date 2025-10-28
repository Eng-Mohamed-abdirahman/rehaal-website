'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'
import Image from 'next/image'

type FAQItem = {
  id: string
  icon: IconName
  question: string
  answer: string
}

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: 'item-2',
      icon: 'users',
      question: 'I don\'t know anyone who is traveling on the trip. Can I still book?',
      answer: 'Yes, the vast majority of our guests don\'t know anyone else either. So that\'s completely normal.',
    },
    {
      id: 'item-3',
      icon: 'help-circle',
      question: 'This is my first time and I\'m not quite sure how to do it. Can you help me?',
      answer: 'Yes, of course. We will dress you before the trip, and we are always available during the trip.',
    },
    {
      id: 'item-4',
      icon: 'globe',
      question: 'I have a foreign passport, can I get a visa to Saudi Arabia?',
      answer: 'Currently, holders of the grey passport can obtain a visa (for a fee). However, with the exception of people of Syrian and Afghan nationality. Holders of the blue travel document cannot obtain a visa, unfortunately.',
    },
    {
      id: 'item-5',
      icon: 'wallet',
      question: 'I can\'t afford to pay the full amount right now, can I pay in installments?',
      answer: 'Yes, we are flexible in terms of payment. As long as the first installment is paid, we can agree on an individual payment plan for you. The first installment also functions as a non-refundable deposit. It is of course a requirement that the full amount is paid before departure.".',
    },
    {
      id: 'item-6',
      icon: 'stamp',
      question: 'Can I just buy a visa to Saudi Arabia through you, without traveling with you?',
      answer: 'No, unfortunately not. We only issue visas to our own guests.',
    },
    {
      id: 'item-7',
      icon: 'handshake',
      question: 'I am a woman who unfortunately has no mahram to travel with. Can I still travel with you?',
      answer: 'Yes, women are welcome to travel with us as a group. Here you will join a community of like-minded women who are also in the same situation.',
    },
    {
      id: 'item-8',
      icon: 'syringe',
      question: 'Do you need to be vaccinated to travel for Umrah?',
      answer: 'There is no requirement to be vaccinated for Umrah.',
    },
  ]

  return (
    <section
      id="faqs"
      className="relative isolate bg-background py-12 md:py-16 overflow-hidden overflow-x-clip"
    >
      {/* Background image */}
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWBT_mrdYULJXQ8vnhXLX2F_rXSzUWRb4Eg&s"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 object-cover object-center opacity-25"
        priority
      />
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background/85 backdrop-blur-[1px]" />

      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Left column */}
          <div className="md:w-1/3 md:sticky md:top-20">
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base">
              Can&apos;t find what you&apos;re looking for? Contact our{" "}
              <Link href="#" className="text-primary font-medium hover:underline">
                customer support team
              </Link>
            </p>
          </div>

          {/* Right column */}
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background/80 backdrop-blur-sm shadow-xs rounded-lg border px-3"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon name={item.icon} className="m-auto size-4" />
                      </div>
                      <span className="text-sm md:text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="px-8">
                      <p className="text-sm md:text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
