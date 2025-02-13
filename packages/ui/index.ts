import { blocks } from './src/registry/registry-blocks';
import { charts } from './src/registry/registry-charts';
import { examples } from './src/registry/registry-examples';
import { hooks } from './src/registry/registry-hooks';
import { lib } from './src/registry/registry-lib';
import { themes } from './src/registry/registry-themes';
import { ui } from './src/registry/registry-ui';
import { v0 } from './src/registry/registry-v0';
import { type Registry } from "./src/registry/schema";

export const registry: Registry = [...ui, ...examples, ...blocks, ...charts, ...lib, ...hooks, ...themes, ...v0];
