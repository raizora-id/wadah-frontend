import { ScrollArea } from '@packages/ui/components/base/scroll-area';

interface NoteContentProps {
    title: string;
    author: string;
    content: string;
    className?: string;
}

export function NoteContent({ title, author, content, className }: NoteContentProps) {
    return (
        <div className={className}>
            <div className='flex h-14 items-center justify-between border-b px-4'>
                <h1 className='truncate text-lg font-semibold'>{title}</h1>
                <span className='text-muted-foreground text-sm'>by {author}</span>
            </div>
            <ScrollArea className='h-[calc(100vh-3.5rem)]'>
                <div className='p-4'>
                    <div className='prose prose-gray max-w-none'>
                        <p>{content}</p>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}
