'use client';

import SignInForm from '@/components/forms/signin-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomTextWrapper } from '@/components/ui/custom-text-wrapper';
import { GoogleIcon } from '@/icons';
import { createClient } from '@/lib/supabase/client';

const SignInPage = () => {
  const supabase = createClient();

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to My Project</CardTitle>
        <CardDescription>
          Do not have an account?{' '}
          <span className="cursor-pointer hover:underline">
            <CustomTextWrapper>Start here</CustomTextWrapper>
          </span>
        </CardDescription>
      </CardHeader>
      <hr className="border-t-1 mx-6 mb-8 mt-2 border-neutral-200" />
      <CardContent className="mt-6 pb-4">
        <SignInForm />
      </CardContent>
      <hr className="border-t-1 mx-6 mb-4 border-neutral-200" />
      <div className="mb-6 grid">
        <Button onClick={loginWithGoogle} variant="outline" className="mx-6 flex gap-2 font-normal">
          <GoogleIcon />
          Continue with Google
        </Button>
      </div>
    </Card>
  );
};

export default SignInPage;
