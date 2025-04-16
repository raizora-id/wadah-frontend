import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { DataTable } from './data-table';
import { 
  getCoreRowModel, 
  useReactTable,
  createColumnHelper
} from '@tanstack/react-table';

// Mock data
type Person = {
  id: string;
  name: string;
  email: string;
  role: string;
};

const data: Person[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Developer',
  },
];

// To avoid testing all sub-components, we'll mock some of them
vi.mock('./data-table-pagination', () => ({
  DataTablePagination: ({ table }: { table: any }) => (
    <div data-testid="data-table-pagination">Pagination Mock</div>
  ),
}));

describe('DataTable Component', () => {
  it('renders empty state correctly', () => {
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
    ];

    const table = useReactTable({
      data: [],
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    render(<DataTable table={table} />);
    
    expect(screen.getByText('No results.')).toBeInTheDocument();
  });

  it('renders table with data correctly', () => {
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
    ];

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    render(<DataTable table={table} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders floating bar when rows selected', () => {
    const columnHelper = createColumnHelper<Person>();

    const columns = [
      columnHelper.accessor('id', {
        header: 'ID',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('name', {
        header: 'Name',
        cell: info => info.getValue(),
      }),
    ];

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      // Mock the method to pretend we have selected rows
      getFilteredSelectedRowModel: () => ({ rows: [{ id: '1' }] }),
    });

    render(
      <DataTable 
        table={table as any} 
        floatingBar={<div data-testid="floating-bar">Actions Bar</div>}
      />
    );
    
    expect(screen.getByTestId('floating-bar')).toBeInTheDocument();
  });

  it('applies custom className correctly', () => {
    const columnHelper = createColumnHelper<Person>();

    const columns = [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: info => info.getValue(),
      }),
    ];

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    render(<DataTable table={table} className="test-class" data-testid="data-table" />);
    
    const tableComponent = screen.getByTestId('data-table');
    expect(tableComponent).toHaveClass('test-class');
  });
});