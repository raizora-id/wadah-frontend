import { cn } from '@/lib/utils';
import { Button } from '@packages/ui/components/ui/button';

import type { LucideIcon } from 'lucide-react';

interface FolderItemProps {
    icon: LucideIcon;
    label: string;
    count: number;
    variant?: 'default' | 'yellow';
    indent?: boolean;
    selected?: boolean;
}

export function FolderItem({
    icon: Icon,
    label,
    count,
    variant = 'default',
    indent = false,
    selected = false
}: FolderItemProps) {
    return (
        <Button
            variant='ghost'
            className={cn(
                'w-full justify-start transition-colors duration-200',
                indent && 'pl-8',
                variant === 'yellow' && 'text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700',
                selected && 'bg-primary/5 text-primary hover:bg-primary/10'
            )}>
            <Icon className='mr-2 h-4 w-4' />
            <span className='truncate'>{label}</span>
            <span className='text-muted-foreground ml-auto text-xs'>{count}</span>
        </Button>
    );
}
