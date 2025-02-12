import { Button } from '@packages/ui/components/ui/button';

import { ChevronRight } from 'lucide-react';

export default function ButtonIcon() {
    return (
        <Button variant='outline' size='icon'>
            <ChevronRight className='size-4' />
        </Button>
    );
}
