import React from 'react';
import { createElement } from 'react';
import type { ElementType, ComponentProps , ReactNode, ReactElement, JSXElementConstructor } from 'react';

export function createBuilder<E extends ElementType, T extends Record<string, E>>(resolver: T) {
  type PropsMap = {
    [K in keyof T]: ComponentProps<T[K]>;
  };

  type PropsConfig<P> = {
    [K in keyof P]: P[K] extends { children?: ReactNode }
      ? {
          id?: string;
          type: K;
          props: Omit<P[K], 'children'>;
          children?: PropsConfig<P>[] | ReactNode;
        } & (P[K] extends { otherNode?: ReactNode }
          ? { otherNode?: PropsConfig<P>[] | ReactNode }
          : { otherNode?: never })
      : {
          id?: string;
          type: K;
          props: P[K];
          children?: never;
          otherNode?: never;
        };
  }[keyof P];

  type Config = PropsConfig<PropsMap>;

  const render = (configs: Config[], depth = 0): ReactElement[] => {
    return configs.map((config, index) => {
      const { id, type, props, children, otherNode } = config;

      const renderedChildren = Array.isArray(children)
        ? render(children, depth + 1)
        : children;

      const renderedOtherNodes = Array.isArray(otherNode)
        ? render(otherNode, depth + 1)
        : otherNode;

      if (!resolver[type]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return null as any; // Handle the case where resolver[type] is not found
      }

      return createElement(
        resolver[type],
        {
          ...props,
          key: id || index.toString(),
          ...(renderedOtherNodes ? { otherNode: renderedOtherNodes } : {}),
          id,
        },
        renderedChildren
      );
    }).filter(Boolean) as ReactElement[];
  };

  function Builder({ configs }: { configs: Config[] }) {
    return <>{render(configs)}</>;
  }

  return { Builder, components: resolver };
}

export type ConfigsTypeOf<T extends ElementType> = T extends ElementType<infer P>
  ? P extends { configs: infer C }
    ? C
    : never
  : never;