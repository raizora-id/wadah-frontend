"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../base/avatar";
import { LogOut, Settings } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "../../base/button";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../base/dropdown-menu";


export function SearchForm() {

  const handleLogout = async () => {
    await signOut({ redirect: false, callbackUrl: "/" });
  };

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://dashboard.shadcnuikit.com/images/avatars/1.png" alt="User avatar" />
              <AvatarFallback>TB</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Toby Belhome</p>
              <p className="text-xs leading-none text-muted-foreground">contact@bundui.io</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" aria-hidden />
              Profile
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => handleLogout()}
          >
            <LogOut className="mr-2 h-4 w-4" aria-hidden />
              Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}

