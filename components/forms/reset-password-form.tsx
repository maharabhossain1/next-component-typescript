'use client';

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkEmailSchema } from '@/lib/validations/auth';
import { useRouter } from 'next/navigation';

type Inputs = z.infer<typeof checkEmailSchema>;

const ResetPasswordForm = () => {
  const router = useRouter();
  const form = useForm<Inputs>({
    resolver: zodResolver(checkEmailSchema),
    defaultValues: {
      email: ''
    }
  });

  function onSubmit(data: Inputs) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send</Button>
        <Button type="button" variant="ghost" onClick={() => router.back()}>
          Back
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
