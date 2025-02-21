import { ScrollArea } from '@packages/ui/components/base/scroll-area';

import { NoteItem } from './note-item';
import { SearchBar } from './search-bar';

interface NotesListProps {
    className?: string;
}

export function NotesList({ className }: NotesListProps) {
    const books = [
        { title: 'Moby Dick', author: 'Herman Melville' },
        { title: 'The Importance of Being Earnest', author: 'Oscar Wilde' },
        { title: 'A Tale of Two Cities', author: 'Charles Dickens', selected: true },
        { title: 'Dracula', author: 'Bram Stoker' },
        { title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne' },
        { title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: "Alice's Adventures in Wonderland", author: 'Lewis Carroll' },
        { title: 'Frankenstein', author: 'Mary Shelley' },
        { title: 'Pride and Prejudice', author: 'Jane Austen' }
    ];

    return (
        <div className={className}>
            <div className='p-4'>
                <SearchBar className='mb-4' />
                <ScrollArea className='h-[calc(100vh-8rem)]'>
                    <div className='space-y-1'>
                        {books.map((book) => (
                            <NoteItem
                                key={book.title}
                                title={book.title}
                                subtitle={`Yesterday · by ${book.author}`}
                                selected={book.selected}
                            />
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}
