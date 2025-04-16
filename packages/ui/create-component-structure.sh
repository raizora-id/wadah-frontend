#!/bin/bash

# Define source directory
SRC_DIR="/Users/ridho/Documents/go/github.com/red-ant-colony/web-monorepo/packages/ui/src"
BASE_COMPONENTS_DIR="$SRC_DIR/components/base"

# Create test templates function
create_test_template() {
    local component_name=$1
    local component_path=$2
    local original_file=$3
    local kebab_case_name=$4
    
    # Check if the component is self-closing (input, img, etc.)
    local is_self_closing=false
    if [[ "$kebab_case_name" == "input" || "$kebab_case_name" == "avatar" || "$kebab_case_name" == "separator" || "$kebab_case_name" == "progress" ]]; then
        is_self_closing=true
    fi
    
    # Create the test file
    if [ "$is_self_closing" = true ]; then
        cat > "$component_path/${kebab_case_name}.test.tsx" << EOL
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { $component_name } from './index';

describe('$component_name Component', () => {
  it('renders correctly', () => {
    render(<$component_name data-testid="test-${kebab_case_name}" />);
    const element = screen.getByTestId('test-${kebab_case_name}');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
EOL
    else
        cat > "$component_path/${kebab_case_name}.test.tsx" << EOL
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { $component_name } from './index';

describe('$component_name Component', () => {
  it('renders correctly', () => {
    render(<$component_name>Test</$component_name>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
EOL
    fi
}

# Create stories template function
create_stories_template() {
    local component_name=$1
    local component_path=$2
    local kebab_case_name=$3
    
    # Check if the component is self-closing (input, img, etc.)
    local is_self_closing=false
    if [[ "$kebab_case_name" == "input" || "$kebab_case_name" == "avatar" || "$kebab_case_name" == "separator" || "$kebab_case_name" == "progress" ]]; then
        is_self_closing=true
    fi
    
    if [ "$is_self_closing" = true ]; then
        cat > "$component_path/${kebab_case_name}.stories.tsx" << EOL
import type { Meta, StoryObj } from '@storybook/react';
import { $component_name } from './index';

const meta: Meta<typeof $component_name> = {
  title: 'Components/Base/$component_name',
  component: $component_name,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof $component_name>;

export const Default: Story = {
  args: {
    // Add appropriate props for this component
  },
};

// Add more stories as needed based on component variants
EOL
    else
        cat > "$component_path/${kebab_case_name}.stories.tsx" << EOL
import type { Meta, StoryObj } from '@storybook/react';
import { $component_name } from './index';

const meta: Meta<typeof $component_name> = {
  title: 'Components/Base/$component_name',
  component: $component_name,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof $component_name>;

export const Default: Story = {
  args: {
    children: 'Default $component_name',
  },
};

// Add more stories as needed based on component variants
EOL
    fi
}

# Process each component file in the base directory
echo "Starting component structure creation..."

# Skip any components that already have their own folder
SKIP_COMPONENTS=("button" "input" "alert")

# Find all component files
for file_path in $BASE_COMPONENTS_DIR/*.tsx; do
    # Extract file name without extension
    file_name=$(basename "$file_path" .tsx)
    
    # Skip if this is already in our skip list
    if [[ " ${SKIP_COMPONENTS[@]} " =~ " ${file_name} " ]]; then
        echo "Skipping $file_name (already processed)"
        continue
    fi
    
    # Extract component name from file (assuming component name matches file name)
    # First character uppercase, rest as is
    component_name=$(echo "$file_name" | awk '{print toupper(substr($0,1,1)) substr($0,2)}' | tr '-' ' ' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2); print}' | tr -d ' ')
    
    # Create directory for the component
    component_dir="$BASE_COMPONENTS_DIR/$file_name"
    mkdir -p "$component_dir"
    
    # Copy the component to index.tsx
    cp "$file_path" "$component_dir/index.tsx"
    
    # Create test file
    create_test_template "$component_name" "$component_dir" "$file_path" "$file_name"
    
    # Create stories file
    create_stories_template "$component_name" "$component_dir" "$file_name"
    
    echo "Created structure for $component_name"
done

echo "Component structure creation completed!"