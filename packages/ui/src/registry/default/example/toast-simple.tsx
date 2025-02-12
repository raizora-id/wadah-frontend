'use client';

import { useToast } from '@/registry/default/hooks/use-toast';
import { Button } from '@rac/ui/components/ui/button';

export default function ToastSimple() {
    const { toast } = useToast();

    return (
        <Button
            variant='outline'
            onClick={() => {
                toast({
                    description: 'Your message has been sent.'
                });
            }}>
            Show Toast
        </Button>
    );
}
