'use client';

import { useToast } from '@/registry/default/hooks/use-toast';
import { ToastAction } from '@/registry/default/ui/toast';
import { Button } from '@rac/ui/components/ui/button';

export default function ToastDemo() {
    const { toast } = useToast();

    return (
        <Button
            variant='outline'
            onClick={() => {
                toast({
                    title: 'Scheduled: Catch up ',
                    description: 'Friday, February 10, 2023 at 5:57 PM',
                    action: <ToastAction altText='Goto schedule to undo'>Undo</ToastAction>
                });
            }}>
            Add to calendar
        </Button>
    );
}
