import SignInForm from '@/components/forms/signin-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomTextWrapper } from '@/components/ui/custom-text-wrapper';

const page = () => {
  return (
    <div className="font-primary">
      <Card className="m-auto mt-36 max-w-md">
        <CardHeader>
          <CardTitle>Login to Algorizin</CardTitle>
          <CardDescription>
            Do not have an account?{' '}
            <span className="cursor-pointer hover:underline">
              <CustomTextWrapper>Start here</CustomTextWrapper>
            </span>
          </CardDescription>
        </CardHeader>
        <hr className="border-t-1 mx-6 mb-3 border-neutral-200" />
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
