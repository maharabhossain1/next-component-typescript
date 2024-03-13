'use client';

import React, { useEffect, useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { createClient } from '@/lib/supabase/client';
import UserAvatar from './user-avatar';
import { useRouter } from 'next/navigation';

const UserDropdownMenu = () => {
  const [avatarInfo, setAvatarInfo] = useState({ avatarUrl: '', fallback: '' });
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      const avatarUrl = session?.user.user_metadata?.avatar_url;
      const fallback = session?.user.user_metadata.full_name?.slice(0, 2);
      if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        setAvatarInfo({ avatarUrl, fallback });
        setShowUserMenu(!!session?.user);
      } else if (event === 'SIGNED_OUT') {
        setShowUserMenu(false);
        router.push('/signin');
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [supabase.auth, router]);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      {showUserMenu ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserAvatar {...avatarInfo} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[150px]">
            <DropdownMenuGroup>
              <DropdownMenuItem>Account</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </div>
  );
};

export default UserDropdownMenu;
