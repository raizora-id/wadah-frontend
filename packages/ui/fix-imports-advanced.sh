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
        
        # Fix @ui/lib/utils imports
        sed -i '' 's|import { cn } from "@ui/lib/utils";|import { cn } from "../../../lib/utils";|g' "$index_file"
        sed -i '' "s|import { cn } from '@ui/lib/utils';|import { cn } from '../../../lib/utils';|g" "$index_file"
        
        # Fix any lib/utils imports with relative paths
        sed -i '' 's|import { cn } from "../../lib/utils";|import { cn } from "../../../lib/utils";|g' "$index_file"
        sed -i '' "s|import { cn } from '../../lib/utils';|import { cn } from '../../../lib/utils';|g" "$index_file"
        
        # Fix relative imports to other components in the base directory
        sed -i '' 's|import \(.*\) from "./\([^"]*\)"|import \1 from "../\2"|g' "$index_file"
        sed -i '' "s|import \(.*\) from './\([^']*\)'|import \1 from '../\2'|g" "$index_file"
        
        # Fix component-specific imports
        # For components that import 'button'
        if grep -q "from ['\"]../button['\"]" "$index_file"; then
            echo "  - Fixing button imports"
            # Do nothing, the path is already correct
        elif grep -q "from ['\"]./button['\"]" "$index_file"; then
            echo "  - Fixing button imports"
            sed -i '' 's|from "./button"|from "../button"|g' "$index_file"
            sed -i '' "s|from './button'|from '../button'|g" "$index_file"
        fi
        
        # For components that import 'dialog'
        if grep -q "from ['\"]./dialog['\"]" "$index_file"; then
            echo "  - Fixing dialog imports"
            sed -i '' 's|from "./dialog"|from "../dialog"|g' "$index_file"
            sed -i '' "s|from './dialog'|from '../dialog'|g" "$index_file"
        fi
        
        # For components that import 'label'
        if grep -q "from ['\"]./label['\"]" "$index_file"; then
            echo "  - Fixing label imports"
            sed -i '' 's|from "./label"|from "../label"|g' "$index_file"
            sed -i '' "s|from './label'|from '../label'|g" "$index_file"
        fi
        
        # For components that import hooks
        if grep -q "from ['\"]../../hooks/" "$index_file"; then
            echo "  - Fixing hooks imports"
            sed -i '' 's|from "../../hooks/\([^"]*\)"|from "../../../hooks/\1"|g' "$index_file"
            sed -i '' "s|from '../../hooks/\([^']*\)'|from '../../../hooks/\1'|g" "$index_file"
        fi
        
        # For toast-related imports in toaster
        if [ "$component_name" == "toaster" ]; then
            echo "  - Fixing toast imports in toaster"
            sed -i '' 's|from "./toast"|from "../toast"|g' "$index_file"
            sed -i '' "s|from './toast'|from '../toast'|g" "$index_file"
        fi
    fi
done

echo "Advanced import fixes completed!"