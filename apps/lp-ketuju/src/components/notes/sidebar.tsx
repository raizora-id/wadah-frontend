import { ScrollArea } from '@packages/ui/components/base/scroll-area';

import { FolderItem } from './folder-item';
import { FileText, FolderIcon, Gift, ShoppingBag, Trash } from 'lucide-react';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    return (
        <div className={className}>
            <ScrollArea className='h-[calc(100vh-3.5rem)]'>
                <div className='space-y-4 p-4'>
                    <FolderItem icon={FileText} label='Quick Notes' count={0} variant='yellow' />

                    <div className='space-y-1'>
                        <h3 className='mb-2 px-2 text-xs font-semibold text-gray-500 uppercase'>iCloud</h3>
                        <FolderItem icon={FolderIcon} label='All iCloud' count={26} />
                        <FolderItem icon={FileText} label='Notes' count={0} />
                        <FolderItem icon={FileText} label='Books' count={10} />
                        <FolderItem icon={FileText} label='Analysis' count={4} indent />
                        <FolderItem icon={FolderIcon} label='Personal Stuff' count={0} />
                        <FolderItem icon={Gift} label='Gift Ideas' count={3} indent />
                        <FolderItem icon={ShoppingBag} label='Shopping Lists' count={9} indent />
                    </div>

                    <div className='space-y-1'>
                        <h3 className='mb-2 px-2 text-xs font-semibold text-gray-500 uppercase'>On My Device</h3>
                        <FolderItem icon={Trash} label='Recently Deleted' count={7} />
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}
