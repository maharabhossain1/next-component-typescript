'use client';

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '@/lib/validations/auth';
import { CustomTextWrapper } from '../ui/custom-text-wrapper';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Inputs = z.infer<typeof authSchema>;

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: Inputs) => {
    setLoading(true);
    try {
      const { email, password } = data;
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) {
        setError(error.message);
      } else {
        router.push('/');
      }
    } finally {
      setLoading(false);
    }
  };

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
                <Input type="text" placeholder="Enter your email" {...field} />
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
                <Input type="password" placeholder="Enter password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-red-600">{error}</p>
          <div>
            <Link aria-label="Reset password" href="/signin/reset-password">
              <CustomTextWrapper className="cursor-pointer hover:underline">
                Forgot password?
              </CustomTextWrapper>
            </Link>
          </div>
        </div>
        <Button disabled={loading} type="submit">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            'Login'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
