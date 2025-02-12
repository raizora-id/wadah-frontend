import Link from 'next/link';

import { Button } from '@packages/ui/components/ui/button';

export default function ButtonAsChild() {
    return (
        <Button asChild>
            <Link href='/login'>Login</Link>
        </Button>
    );
}
