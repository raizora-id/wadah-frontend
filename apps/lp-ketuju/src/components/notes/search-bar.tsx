import { cn } from '@/lib/utils';
import { Input } from '@packages/ui/components/base/input';

import { Mic, Search } from 'lucide-react';

interface SearchBarProps {
    className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
    return (
        <div className={cn('relative', className)}>
            <Search className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
            <Input
                placeholder='Search'
                className='border-gray-200 bg-gray-50/50 pr-9 pl-9 focus-visible:ring-gray-400'
            />
            <Mic className='text-muted-foreground absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2' />
        </div>
    );
}
