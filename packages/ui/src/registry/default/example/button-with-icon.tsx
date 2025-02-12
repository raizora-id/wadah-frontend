import { Button } from '@packages/ui/components/ui/button';

import { Mail } from 'lucide-react';

export default function ButtonWithIcon() {
    return (
        <Button>
            <Mail /> Login with Email
        </Button>
    );
}
