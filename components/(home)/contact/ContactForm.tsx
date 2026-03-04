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
import { toast } from 'sonner';
import clsx from 'clsx';

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
    toast.success('Thank you! Your message has been sent.');
    form.reset();
  }

  return (
    <motion.div
      variants={contactFormVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="glass-panel"
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
            className="group/btn btn-pill-white relative overflow-hidden transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            {/* Subtle Gradient Hover Overlay */}
            <div
              className={clsx(
                'absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover/btn:opacity-100',
                'from-accent bg-linear-to-r to-red-900'
              )}
            />
            <span className="relative z-10">Connect with Our Team</span>
            <div className="relative z-10 ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-all duration-300 group-hover/btn:rotate-45 group-hover/btn:bg-white/20">
              <ArrowUpRight size={18} />
            </div>
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
