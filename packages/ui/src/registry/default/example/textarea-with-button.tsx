import { Textarea } from '@/registry/default/ui/textarea';
import { Button } from '@rac/ui/components/ui/button';

export default function TextareaWithButton() {
    return (
        <div className='grid w-full gap-2'>
            <Textarea placeholder='Type your message here.' />
            <Button>Send message</Button>
        </div>
    );
}
