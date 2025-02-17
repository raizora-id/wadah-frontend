'use client';

import React, { FormEvent, useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@packages/ui/components/base/button';
import { Input } from '@packages/ui/components/base/input';
import { Label } from '@packages/ui/components/base/label';

import { signIn } from 'next-auth/react';

export function LoginForm({ className, ...props }: React.ComponentProps<'form'>) {
    const [name, setName] = useState<undefined | string>('admin@example.com');
    const [password, setPassword] = useState<undefined | string>('admin');

    function HandleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log('jalan');
        signIn('credentials', {
            username: name,
            password
        });
    }

    return (
        <form className={cn('flex flex-col gap-6', className)} {...props} onSubmit={HandleSubmit}>
            <div className='flex flex-col items-center gap-2 text-center'>
                <h1 className='text-2xl font-bold'>Login to your account</h1>
                <p className='text-muted-foreground text-sm text-balance'>
                    Enter your email below to login to your account
                </p>
            </div>
            <div className='grid gap-6'>
                <div className='grid gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        id='email'
                        type='email'
                        placeholder='admin@example.com'
                    />
                </div>
                <div className='grid gap-2'>
                    <div className='flex items-center'>
                        <Label htmlFor='password'>Password</Label>
                        <a href='#' className='ml-auto text-sm underline-offset-4 hover:underline'>
                            Forgot your password?
                        </a>
                    </div>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        id='password'
                        type='password'
                        value={password}
                    />
                </div>
                <Button type='submit' className='w-full'>
                    Sign In
                </Button>
                <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                    <span className='bg-background text-muted-foreground relative z-10 px-2'>Or continue with</span>
                </div>
            </div>
        </form>
    );
}
