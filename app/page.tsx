import { createClient } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = createClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  console.log('test-auth', session);

  return <main>Component testing and maintenance </main>;
}
