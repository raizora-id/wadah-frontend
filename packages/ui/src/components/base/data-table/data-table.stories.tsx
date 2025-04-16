import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  getCoreRowModel, 
  useReactTable,
  createColumnHelper,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState
} from '@tanstack/react-table';
import { DataTable } from './data-table';
import { Button } from '../button';
import { DataTableColumnHeader } from './data-table-column-header';

// Mock data
type Person = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinedDate: string;
};

const data: Person[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Developer',
    status: 'active',
    joinedDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Designer',
    status: 'active',
    joinedDate: '2023-02-20',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Manager',
    status: 'inactive',
    joinedDate: '2022-11-05',
  },
  {
    id: '4',
    name: 'Alice Williams',
    email: 'alice@example.com',
    role: 'Developer',
    status: 'active',
    joinedDate: '2023-03-10',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    role: 'Designer',
    status: 'inactive',
    joinedDate: '2022-09-15',
  },
  {
    id: '6',
    name: 'Diana Prince',
    email: 'diana@example.com',
    role: 'Manager',
    status: 'active',
    joinedDate: '2023-04-25',
  },
  {
    id: '7',
    name: 'Edward Smith',
    email: 'edward@example.com',
    role: 'Developer',
    status: 'active',
    joinedDate: '2022-12-05',
  },
  {
    id: '8',
    name: 'Fiona Carter',
    email: 'fiona@example.com',
    role: 'Designer',
    status: 'inactive',
    joinedDate: '2023-01-30',
  },
  {
    id: '9',
    name: 'George Miller',
    email: 'george@example.com',
    role: 'Manager',
    status: 'active',
    joinedDate: '2022-10-20',
  },
  {
    id: '10',
    name: 'Hannah Jones',
    email: 'hannah@example.com',
    role: 'Developer',
    status: 'active',
    joinedDate: '2023-02-10',
  },
];

const meta: Meta<typeof DataTable> = {
  title: 'Components/Base/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Basic: Story = {
  render: function BasicTable() {
    const columnHelper = createColumnHelper<Person>();

    const columns = [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('role', {
        header: 'Role',
        cell: info => info.getValue(),
      }),
    ];

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });

    return (
      <div className="w-[800px]">
        <DataTable table={table} />
      </div>
    );
  }
};

export const WithSortingAndPagination: Story = {
  render: function SortingTable() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 5,
    });
    
    const columnHelper = createColumnHelper<Person>();

    const columns = [
      columnHelper.accessor('name', {
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('email', {
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Email" />
        ),
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('role', {
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Role" />
        ),
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('status', {
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: info => (
          <div className={`font-medium ${info.getValue() === 'active' ? 'text-green-500' : 'text-red-500'}`}>
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor('joinedDate', {
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Joined Date" />
        ),
        cell: info => new Date(info.getValue()).toLocaleDateString(),
      }),
    ];

    const table = useReactTable({
      data,
      columns,
      state: {
        sorting,
        pagination,
      },
      onSortingChange: setSorting,
      onPaginationChange: setPagination,
      getSortedRowModel: getSortedRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });

    return (
      <div className="w-[800px]">
        <DataTable table={table} />
      </div>
    );
  }
};

export const WithFloatingBar: Story = {
  render: function FloatingBarTable() {
    const [rowSelection, setRowSelection] = useState({});
    
    const columnHelper = createColumnHelper<Person>();

    const columns = [
      columnHelper.display({
        id: 'select',
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      }),
      columnHelper.accessor('name', {
        header: 'Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('role', {
        header: 'Role',
        cell: info => info.getValue(),
      }),
    ];

    const table = useReactTable({
      data,
      columns,
      state: {
        rowSelection,
      },
      enableRowSelection: true,
      onRowSelectionChange: setRowSelection,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });

    const FloatingBar = () => {
      const selectedCount = table.getFilteredSelectedRowModel().rows.length;
      
      return (
        <div className="fixed bottom-0 left-0 right-0 flex h-16 items-center justify-between gap-2 border-t bg-background p-4">
          <div className="text-sm font-medium">
            {selectedCount} {selectedCount === 1 ? 'row' : 'rows'} selected
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Edit
            </Button>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </div>
        </div>
      );
    };

    return (
      <div className="w-[800px]">
        <DataTable
          table={table}
          floatingBar={<FloatingBar />}
        />
      </div>
    );
  }
};

export const EmptyState: Story = {
  render: function EmptyTable() {
    const columnHelper = createColumnHelper<Person>();

    const columns = [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('role', {
        header: 'Role',
        cell: info => info.getValue(),
      }),
    ];

    const table = useReactTable({
      data: [],
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });

    return (
      <div className="w-[800px]">
        <DataTable table={table} />
      </div>
    );
  }
};