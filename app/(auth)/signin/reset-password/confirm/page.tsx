import ResetPasswordConfirmForm from '@/components/forms/reset-password-confirm-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResetPasswordConfirmPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Password</CardTitle>
        <CardDescription>Enter a new password.</CardDescription>
      </CardHeader>
      <hr className="border-t-1 mx-6 mb-8 mt-2 border-neutral-200" />
      <CardContent>
        <ResetPasswordConfirmForm />
      </CardContent>
    </Card>
  );
};

export default ResetPasswordConfirmPage;
