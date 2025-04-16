#!/bin/bash

# Define source directory
SRC_DIR="/Users/ridho/Documents/go/github.com/red-ant-colony/web-monorepo/packages/ui/src"
BASE_COMPONENTS_DIR="$SRC_DIR/components/base"

# Loop through all component directories
for component_dir in $BASE_COMPONENTS_DIR/*/; do
    component_name=$(basename "$component_dir")
    index_file="$component_dir/index.tsx"
    
    if [ -f "$index_file" ]; then
        echo "Fixing imports for $component_name..."
        
        # Fix imports from @ui/lib/utils to ../../../lib/utils
        sed -i '' 's|import { cn } from "@ui/lib/utils";|import { cn } from "../../../lib/utils";|g' "$index_file"
        sed -i '' "s|import { cn } from '@ui/lib/utils';|import { cn } from '../../../lib/utils';|g" "$index_file"
        
        # Fix relative imports within components/base directory
        sed -i '' 's|import \(.*\) from "./\([^"]*\)"|import \1 from "../\2"|g' "$index_file"
        sed -i '' "s|import \(.*\) from './\([^']*\)'|import \1 from '../\2'|g" "$index_file"
        
        # Fix specific components
        if [[ "$component_name" == "alert-dialog" ]]; then
            sed -i '' "s|import { buttonVariants } from '../button'|import { buttonVariants } from '../button'|g" "$index_file"
        fi
    fi
done

echo "Import fixes completed!"