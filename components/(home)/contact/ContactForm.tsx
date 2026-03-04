'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { contactFormVariants } from './anim';
import { contactFormSchema, type ContactFormValues } from '@/schema';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { ArrowUpRight } from 'lucide-react';
import FormField from '@/components/shared/FormField';

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      practice: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: ContactFormValues) {
    console.log(values);
    alert('Thank you! Your message has been sent.');
    form.reset();
  }

  return (
    <motion.div
      variants={contactFormVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative z-10 w-full rounded-3xl bg-black/60 p-4 backdrop-blur-xl md:p-5 lg:max-w-lg lg:p-6 2xl:min-w-120 2xl:p-8"
    >
      <h2 className="mb-10 text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-[2.5em]">
        Have a case to <br className="hidden lg:block" /> discuss?
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            label="Name"
            placeholder="Enter your name"
          />

          <FormField
            control={form.control}
            name="practice"
            label="Practice"
            placeholder="Enter your practice name"
          />

          <FormField
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
          />

          <FormField
            control={form.control}
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
          />

          <FormField
            control={form.control}
            name="message"
            label="How can we support your practice?"
            placeholder="Tell us about your case"
            textarea
            rows={3}
          />

          <Button
            type="submit"
            className="group mt-4 h-14 w-full rounded-full bg-white text-base font-medium text-black transition-all duration-300 hover:bg-white/90 md:text-lg"
          >
            Connect with Our Team
            <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </div>
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
