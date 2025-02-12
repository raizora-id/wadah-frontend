'use client';

import { ErrorState } from '@packages/ui/components/state/error-state';

export default function Error({ error }: { error: Error }) {
    console.log(error)
    return (
        <html>
            <body className='bg-blue-100'>
                <ErrorState error={error} />
            </body>
        </html>
    );
}
