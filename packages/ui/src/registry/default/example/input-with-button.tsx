import { Input } from '@/registry/default/ui/input';
import { Button } from '@packages/ui/components/ui/button';

export default function InputWithButton() {
    return (
        <div className='flex w-full max-w-sm items-center space-x-2'>
            <Input type='email' placeholder='Email' />
            <Button type='submit'>Subscribe</Button>
        </div>
    );
}
