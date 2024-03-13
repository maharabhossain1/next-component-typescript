import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { identifyValidationSchema } from '@/lib/validations/identify-validation-schema';
import { SsnInput } from '../ui/ssn-input';

type FormValues = z.infer<typeof identifyValidationSchema>;

const IdentifyVerificationForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(identifyValidationSchema),
    defaultValues: {
      first_name: '',
      middle_name: '',
      last_name: '',
      ssn: '',
      confirm_ssn: '',
      day: '',
      month: '',
      year: '',
      address: '',
      city: '',
      state: '',
      zip_code: ''
    }
  });
  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-3">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="middle_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Middle Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Middle Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Last name " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-8">
          <FormField
            control={form.control}
            name="ssn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Social Security Number (9 digits)</FormLabel>
                <FormControl>
                  <SsnInput placeholder="SSN" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_ssn"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SsnInput placeholder="Retype SSN" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>This information is used to verify your identity.</FormDescription>
              </FormItem>
            )}
          />
        </div>
        <div className="mt-8 ">
          <FormLabel className="required-field">Date of Birth</FormLabel>
          <div className="mt-2 grid grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="day"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Day" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="month"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Month" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Year" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="mt-8 ">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your address" className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>This information is used to verify your identity.</FormDescription>
              </FormItem>
            )}
          />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="required-field">State</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ZIP code</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="ZIP code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Verify</Button>
      </form>
    </Form>
  );
};

export default IdentifyVerificationForm;
