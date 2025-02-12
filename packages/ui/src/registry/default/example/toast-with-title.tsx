'use client';

import { useToast } from '@/registry/default/hooks/use-toast';
import { Button } from '@packages/ui/components/ui/button';

export default function ToastWithTitle() {
    const { toast } = useToast();

    return (
        <Button
            variant='outline'
            onClick={() => {
                toast({
                    title: 'Uh oh! Something went wrong.',
                    description: 'There was a problem with your request.'
                });
            }}>
            Show Toast
        </Button>
    );
}
