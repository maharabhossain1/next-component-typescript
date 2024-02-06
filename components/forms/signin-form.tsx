'use client';

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '@/lib/validations/auth';
import { CustomTextWrapper } from '../ui/custom-text-wrapper';

type Inputs = z.infer<typeof authSchema>;

const SignInForm = () => {
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  function onSubmit(data: Inputs) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="rodneymullen180@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <p className="text-xs text-red-600">Password did not match</p>
          <div>
            <CustomTextWrapper>Forgot password?</CustomTextWrapper>
          </div>
        </div>
        <Button type="submit">Sign in</Button>
      </form>
    </Form>
  );
};

export default SignInForm;
