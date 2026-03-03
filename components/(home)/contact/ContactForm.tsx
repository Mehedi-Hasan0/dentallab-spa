'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { ArrowUpRight } from 'lucide-react';
import ContactFormField from './ContactFormField';

const contactFormSchema = zod.object({
  name: zod.string().min(2, { message: 'Name must be at least 2 characters.' }),
  practice: zod.string().min(2, { message: 'Practice name must be at least 2 characters.' }),
  email: zod.string().email({ message: 'Please enter a valid email address.' }),
  phone: zod.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: zod.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = zod.infer<typeof contactFormSchema>;

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
    // In a real app, you'd send this to your API
    console.log(values);
    alert('Thank you! Your message has been sent.');
    form.reset();
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-10 w-full rounded-3xl bg-black/60 p-4 backdrop-blur-xl md:p-5 lg:max-w-lg lg:p-6 2xl:min-w-120 2xl:p-8"
    >
      <h2 className="mb-10 text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-[2.5em]">
        Have a case to <br className="hidden lg:block" /> discuss?
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ContactFormField
            control={form.control}
            name="name"
            label="Name"
            placeholder="Enter your name"
          />

          <ContactFormField
            control={form.control}
            name="practice"
            label="Practice"
            placeholder="Enter your practice name"
          />

          <ContactFormField
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
          />

          <ContactFormField
            control={form.control}
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
          />

          <ContactFormField
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
