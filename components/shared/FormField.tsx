'use client';

import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormField as RhFormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface FormFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
  rows?: number;
  className?: string;
  variant?: 'default' | 'floating';
}

export default function FormField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  textarea = false,
  rows = 3,
  className,
  variant = 'default',
}: FormFieldProps<TFieldValues>) {
  const commonClassName = cn(
    'rounded-none border-0 border-b border-white/20 bg-transparent px-0 text-white transition-colors placeholder:text-white/20 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0',
    textarea ? 'min-h-[100px] py-4 resize-none' : 'h-12',
    className
  );

  return (
    <RhFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('relative space-y-1', variant === 'floating' && 'group pt-4')}>
          <FormLabel
            className={cn(
              'transition-colors',
              variant === 'default'
                ? 'text-white/60'
                : 'absolute -top-1 left-0 text-xs font-medium text-white/40 group-focus-within:text-white'
            )}
          >
            {label}
          </FormLabel>
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
          <FormMessage
            className={cn('text-xs text-red-400', variant === 'floating' && 'absolute -bottom-6')}
          />
        </FormItem>
      )}
    />
  );
}
