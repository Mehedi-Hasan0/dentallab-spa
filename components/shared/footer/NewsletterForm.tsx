'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import FormField from '@/components/shared/FormField';
import { newsletterSchema, type NewsletterFormValues } from '@/schema';

export function NewsletterForm() {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: NewsletterFormValues) {
    console.log('Newsletter subscription:', values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex w-full max-w-2xl items-center gap-4"
      >
        <div className="flex-1">
          <FormField
            control={form.control}
            name="email"
            label="Your E-mail"
            placeholder="Enter your email to subscribe"
            variant="floating"
            type="email"
          />
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="shrink-0">
          <Button
            type="submit"
            className="group flex h-12 gap-3 rounded-full bg-white px-8 text-black transition-all hover:bg-neutral-200"
          >
            <span className="text-sm font-semibold">Subscribe</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4 text-black" />
            </div>
          </Button>
        </motion.div>
      </form>
    </Form>
  );
}
