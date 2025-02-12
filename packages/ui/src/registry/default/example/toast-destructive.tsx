'use client';

import { useToast } from '@/registry/default/hooks/use-toast';
import { ToastAction } from '@/registry/default/ui/toast';
import { Button } from '@packages/ui/components/ui/button';

export default function ToastDestructive() {
    const { toast } = useToast();

    return (
        <Button
            variant='outline'
            onClick={() => {
                toast({
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description: 'There was a problem with your request.',
                    action: <ToastAction altText='Try again'>Try again</ToastAction>
                });
            }}>
            Show Toast
        </Button>
    );
}
