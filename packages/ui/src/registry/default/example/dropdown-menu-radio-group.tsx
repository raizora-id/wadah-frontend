'use client';

import * as React from 'react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/registry/default/ui/dropdown-menu';
import { Button } from '@packages/ui/components/ui/button';

export default function DropdownMenuRadioGroupDemo() {
    const [position, setPosition] = React.useState('bottom');

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
