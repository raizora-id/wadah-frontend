import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@packages/ui/components/base/accordion"

export default function FAQSection() {
  return (
    <section id="faq" className="w-full flex justify-center py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our document templates.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Are the templates legally binding?</AccordionTrigger>
              <AccordionContent>
                Yes, our templates are designed by legal professionals to be legally binding when properly completed and
                executed. However, we recommend having your final documents reviewed by your legal counsel, especially
                for complex or high-stakes situations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I customize the templates?</AccordionTrigger>
              <AccordionContent>
                All our templates are fully customizable. You can edit text, add your company branding, and modify
                clauses to suit your specific needs. The templates are provided in editable formats like Word and Google
                Docs to make customization easy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How often are the templates updated?</AccordionTrigger>
              <AccordionContent>
                We regularly update our templates to ensure they comply with the latest laws and regulations. Basic
                plans receive monthly updates, Professional plans receive bi-weekly updates, and Enterprise plans
                receive weekly updates. We also send notifications when significant legal changes affect our templates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I use the templates for multiple businesses?</AccordionTrigger>
              <AccordionContent>
                Our licensing is based on the number of users, not the number of businesses. If you're a single user
                managing multiple businesses, you can use the templates for all your businesses under one license.
                However, you cannot share your account with other individuals beyond your plan's user limit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our templates for any reason,
                you can request a full refund within 30 days of your purchase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Can I request a custom template?</AccordionTrigger>
              <AccordionContent>
                Yes, Enterprise plan subscribers can request custom templates as part of their subscription. For other
                plans, we offer custom template creation for an additional fee. Contact our sales team to discuss your
                specific requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is here to help. Contact us for any questions about our templates or services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@doctemplates.com"
              className="inline-flex items-center justify-center gap-2 text-primary hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              support@doctemplates.com
            </a>
            <a
              href="tel:+18001234567"
              className="inline-flex items-center justify-center gap-2 text-primary hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +1 (800) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

