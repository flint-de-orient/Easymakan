import { motion } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { useState } from 'react';

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: 'What makes Easymakan Development Corporation different from other developers?',
      answer: 'We have 25+ years of experience in Kolkata real estate with a focus on luxury properties, timely delivery, and customer satisfaction. Our projects feature world-class amenities, prime locations, and innovative architectural designs.'
    },
    {
      question: 'What are the payment options available for property purchase?',
      answer: 'We offer flexible payment plans including construction-linked plans, down payment options, and EMI facilities. We also assist with home loan approvals from leading banks with competitive interest rates.'
    },
    {
      question: 'How do I book a property with Easymakan?',
      answer: 'You can book a property by visiting our sales office, calling +91 9749681391, or using our WhatsApp contact form. Our sales team will guide you through the documentation and payment process.'
    },
    {
      question: 'What is the typical timeline for project completion?',
      answer: 'Our projects typically take 3-4 years from launch to completion. We maintain strict timelines and provide regular updates to customers. All our ongoing projects are on schedule for timely delivery.'
    },
    {
      question: 'Do you provide after-sales service and maintenance?',
      answer: 'Yes, we provide comprehensive after-sales service including warranty support, maintenance assistance, and customer care. Our dedicated team ensures all issues are resolved promptly.'
    },
    {
      question: 'What amenities are included in your luxury projects?',
      answer: 'Our luxury projects include swimming pools, fitness centers, landscaped gardens, 24/7 security, power backup, parking facilities, and smart home features. Specific amenities vary by project.'
    },
    {
      question: 'Is it safe to invest in Kolkata real estate market?',
      answer: 'Kolkata real estate market has shown consistent growth with excellent connectivity, IT development, and infrastructure improvements. Our projects are located in prime areas with high appreciation potential.'
    },
    {
      question: 'Do you assist with home loan approvals?',
      answer: 'Yes, we have tie-ups with leading banks and financial institutions. Our team assists with documentation, loan processing, and ensures competitive interest rates for our customers.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37]">Got Questions?</span>
          <h2 className="mt-2 text-[#0a1628]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Find answers to common questions about our luxury real estate projects, 
            investment opportunities, and services in Kolkata.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Collapsible
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <Card className="overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <HelpCircle className="h-4 w-4 text-[#d4af37]" />
                        </div>
                        <h3 className="font-semibold text-[#0a1628] text-left">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-[#d4af37] transition-transform flex-shrink-0 ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6 pl-18">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-[#0a1628] to-[#1a2a3f] rounded-2xl text-white"
        >
          <h3 className="mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Our expert team is here to help you with any queries about our luxury real estate projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919749681391"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#d4af37] text-[#0a1628] rounded-lg font-semibold hover:bg-[#c49d2f] transition-colors"
            >
              Call +91 8777654651
            </a>
            <a
              href="https://wa.me/918777654651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] rounded-lg font-semibold hover:bg-[#d4af37] hover:text-[#0a1628] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}