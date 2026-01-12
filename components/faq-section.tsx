"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
    {
        question: "What makes PoushtPop different from other oat brands?",
        answer: "PoushtPop combines high protein content (15g per serving) with zero added sugar and 100% natural ingredients. We focus on 'Ready to Eat' convenience without compromising on health or taste, using premium gluten-free oats and plant-based proteins."
    },
    {
        question: "Are your products totally gluten-free?",
        answer: "Yes! We use certified gluten-free oats in all our products, making them safe for those with gluten sensitivities. However, they are processed in a facility that handles nuts."
    },
    {
        question: "How do I prepare the Ready-to-Eat oats?",
        answer: "It's super simple! Just add water or your favorite milk (hot or cold), stir, and let it sit for 2 minutes. For 'Overnight Oats' style, soak them in milk and refrigerate overnight."
    },
    {
        question: "Is there any added sugar in your products?",
        answer: "Absolutely not. We sweeten our products naturally using dates, monk fruit, or stevia, ensuring you get a delicious taste without the sugar crash."
    },
    {
        question: "Are PoushtPop products vegan?",
        answer: "Yes, our entire range is 100% plant-based and vegan-friendly. We use pea protein and other plant-derived ingredients."
    },
    {
        question: "What is the shelf life of your products?",
        answer: "Our products have a shelf life of 9 months from the date of manufacturing when stored in a cool, dry place."
    },
    {
        question: "Can I eat PoushtPop oats as a pre-workout meal or post-workout meal?",
        answer: "Definitely! The complex carbohydrates from oats provide sustained energy, while the high protein content supports muscle repair, making it an excellent pre-workout fuel."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Currently, we ship across India. We are working on expanding our delivery network to international locations soon!"
    },
    {
        question: "Is it safe for children?",
        answer: "Yes, our products are made with clean, natural ingredients and are safe for children. However, we recommend checking the ingredient list for any specific nut allergies."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive a tracking link via email and SMS. You can also track it directly from the 'Track Order' link in our website footer."
    }
]

export function FAQSection() {
    const midPoint = Math.ceil(faqs.length / 2)
    const leftColumnFaqs = faqs.slice(0, midPoint)
    const rightColumnFaqs = faqs.slice(midPoint)

    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-2 block">
                        Common Questions
                    </span>
                    <h2 className="font-heading text-4xl font-bold text-zinc-900 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div className="space-y-4">
                        {leftColumnFaqs.map((faq, index) => (
                            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                    <div className="space-y-4">
                        {rightColumnFaqs.map((faq, index) => (
                            <AccordionItem key={index + midPoint} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 transition-colors hover:border-blue-200 dark:hover:border-blue-900">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-6 text-left"
            >
                <span className="font-bold text-zinc-900 dark:text-white text-lg pr-8">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-blue-600 dark:text-blue-400"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/50 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
