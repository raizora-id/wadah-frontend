import { Button } from '@packages/ui/components/ui/button';
import { Card, CardContent } from '@packages/ui/components/ui/card';

export function ContactSection() {
    return (
        <Card className='mb-6'>
            <CardContent className='p-4'>
                <h2 className='mb-4 text-xl font-bold'>Hubungi Kami</h2>
                <p className='mb-4 text-sm text-gray-600'>Silakan hubungi kami, showroom kami akan terbuka bagi anda</p>
                <Button className='w-full bg-green-500 text-white hover:bg-green-600'>0811 822 500 - Deddy</Button>
            </CardContent>
        </Card>
    );
}
