import type { Meta, StoryObj } from '@storybook/react';
import { FileIcon, FolderIcon } from 'lucide-react';
import {
  Snippet,
  SnippetHeader,
  SnippetCopyButton,
  SnippetTabsList,
  SnippetTabsTrigger,
  SnippetTabsContent
} from './index';

const meta: Meta<typeof Snippet> = {
  title: 'Components/Base/Snippet',
  component: Snippet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Snippet>;

const htmlCode = `<div class="flex">
  <div class="p-4">
    <h1 class="text-xl font-bold">Hello World</h1>
    <p>This is a paragraph.</p>
  </div>
</div>`;

const cssCode = `.container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
}`;

const jsCode = `function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome, \${name}!\`;
}

// Call the function
greet('World');`;

export const SingleTab: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Snippet {...args} defaultValue="html">
        <SnippetHeader>
          <SnippetTabsList>
            <SnippetTabsTrigger value="html">HTML</SnippetTabsTrigger>
          </SnippetTabsList>
          <SnippetCopyButton value={htmlCode} />
        </SnippetHeader>
        <SnippetTabsContent value="html">{htmlCode}</SnippetTabsContent>
      </Snippet>
    </div>
  ),
};

export const MultipleTabs: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Snippet {...args} defaultValue="html">
        <SnippetHeader>
          <SnippetTabsList>
            <SnippetTabsTrigger value="html">HTML</SnippetTabsTrigger>
            <SnippetTabsTrigger value="css">CSS</SnippetTabsTrigger>
            <SnippetTabsTrigger value="js">JavaScript</SnippetTabsTrigger>
          </SnippetTabsList>
          <SnippetCopyButton 
            value={args.defaultValue === 'html' ? htmlCode : args.defaultValue === 'css' ? cssCode : jsCode} 
          />
        </SnippetHeader>
        <SnippetTabsContent value="html">{htmlCode}</SnippetTabsContent>
        <SnippetTabsContent value="css">{cssCode}</SnippetTabsContent>
        <SnippetTabsContent value="js">{jsCode}</SnippetTabsContent>
      </Snippet>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Snippet {...args} defaultValue="html">
        <SnippetHeader>
          <SnippetTabsList>
            <SnippetTabsTrigger value="html">
              <FileIcon size={14} />
              <span>index.html</span>
            </SnippetTabsTrigger>
            <SnippetTabsTrigger value="css">
              <FileIcon size={14} />
              <span>styles.css</span>
            </SnippetTabsTrigger>
            <SnippetTabsTrigger value="js">
              <FileIcon size={14} />
              <span>app.js</span>
            </SnippetTabsTrigger>
          </SnippetTabsList>
          <SnippetCopyButton 
            value={args.defaultValue === 'html' ? htmlCode : args.defaultValue === 'css' ? cssCode : jsCode} 
          />
        </SnippetHeader>
        <SnippetTabsContent value="html">{htmlCode}</SnippetTabsContent>
        <SnippetTabsContent value="css">{cssCode}</SnippetTabsContent>
        <SnippetTabsContent value="js">{jsCode}</SnippetTabsContent>
      </Snippet>
    </div>
  ),
};

export const CustomCopyButton: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Snippet {...args} defaultValue="html">
        <SnippetHeader>
          <SnippetTabsList>
            <SnippetTabsTrigger value="html">
              <FolderIcon size={14} />
              <span>HTML</span>
            </SnippetTabsTrigger>
          </SnippetTabsList>
          <SnippetCopyButton value={htmlCode}>
            Copy Code
          </SnippetCopyButton>
        </SnippetHeader>
        <SnippetTabsContent value="html">{htmlCode}</SnippetTabsContent>
      </Snippet>
    </div>
  ),
};