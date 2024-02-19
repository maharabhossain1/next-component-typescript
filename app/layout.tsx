import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { AuthProvider, User } from '@/context/auth-context';
import { createClient } from '@/lib/supabase/server';

const plus_jakarta_sans = Plus_Jakarta_Sans({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className} bg-neutral-50`}>
        <AuthProvider user={user as User | null}>
          <div className="flex h-screen w-full flex-col">
            <div className="z-30">
              <Header />
            </div>
            <div className="flex-1 overflow-y-auto">{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
