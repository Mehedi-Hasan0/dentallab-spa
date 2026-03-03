'use client';

import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface ContactFormFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
  rows?: number;
}

export default function ContactFormField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  textarea = false,
  rows = 3,
}: ContactFormFieldProps<TFieldValues>) {
  const commonClassName = cn(
    'rounded-none border-0 border-b border-white/20 bg-transparent px-0 text-white transition-colors placeholder:text-white/20 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0',
    textarea ? 'min-h-[100px] py-4 resize-none' : 'h-12'
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel className="text-white/60">{label}</FormLabel>
          <FormControl>
            {textarea ? (
              <Textarea
                placeholder={placeholder}
                rows={rows}
                className={commonClassName}
                {...field}
              />
            ) : (
              <Input placeholder={placeholder} type={type} className={commonClassName} {...field} />
            )}
          </FormControl>
          <FormMessage className="text-xs text-red-400" />
        </FormItem>
      )}
    />
  );
}
