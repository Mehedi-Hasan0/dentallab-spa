import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight } from 'lucide-react';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import FormField from '@/components/shared/FormField';
import { toast } from 'sonner';
import clsx from 'clsx';

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
    toast.success('Subscription successful! Welcome to our newsletter.');
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

        <div className="shrink-0">
          <Button
            type="submit"
            className="group/btn relative flex h-12 gap-3 overflow-hidden rounded-full bg-white px-8 text-black transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            {/* Subtle Gradient Hover Overlay */}
            <div
              className={clsx(
                'absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover/btn:opacity-100',
                'from-accent bg-linear-to-r to-red-900'
              )}
            />
            <span className="relative z-10 text-sm font-semibold">Subscribe</span>
            <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-all duration-500 group-hover/btn:rotate-45 group-hover/btn:bg-white/20">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </form>
    </Form>
  );
}
