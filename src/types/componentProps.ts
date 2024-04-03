import React from 'react';

type ComponentProps<T> = T extends (props: infer PropsType) => React.ReactNode
  ? PropsType
  : never;

export type { ComponentProps };
