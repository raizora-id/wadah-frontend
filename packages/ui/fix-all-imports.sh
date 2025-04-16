#!/bin/bash

# Define source directory
SRC_DIR="/Users/ridho/Documents/go/github.com/red-ant-colony/web-monorepo/packages/ui/src"

# Find all files that still use @ui/lib/utils import
echo "Searching for files with incorrect imports..."
FILES_TO_FIX=$(grep -r --include="*.tsx" --include="*.ts" "@ui/lib/utils" $SRC_DIR | cut -d ":" -f1 | sort -u)

# Fix each file
if [ -z "$FILES_TO_FIX" ]; then
  echo "No files need fixing"
else
  echo "Found files to fix:"
  echo "$FILES_TO_FIX"
  echo "-----------------"
  echo "Fixing imports..."
  
  for file in $FILES_TO_FIX; do
    echo "Fixing $file"
    
    # Determine the relative path to lib/utils
    # Count directory levels in path relative to src
    levels=$(echo "$file" | tr -cd '/' | tr '/' '\n' | wc -l)
    levels=$((levels - $(echo "$SRC_DIR" | tr -cd '/' | tr '/' '\n' | wc -l) - 1))
    
    # Create the correct relative path
    rel_path=""
    for ((i=0; i<levels; i++)); do
      rel_path="../$rel_path"
    done
    
    # Replace import
    sed -i '' "s|import { cn } from \"@ui/lib/utils\"|import { cn } from \"${rel_path}lib/utils\"|g" "$file"
    sed -i '' "s|import { cn } from '@ui/lib/utils'|import { cn } from '${rel_path}lib/utils'|g" "$file"
    
    # Handle other import patterns with additional functions
    sed -i '' "s|import { cn, focusRing } from \"@ui/lib/utils\"|import { cn, focusRing } from \"${rel_path}lib/utils\"|g" "$file"
    sed -i '' "s|import { cn, focusRing } from '@ui/lib/utils'|import { cn, focusRing } from '${rel_path}lib/utils'|g" "$file"
  done
  
  echo "All imports fixed!"
fi