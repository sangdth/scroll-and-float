// import { useState } from 'react';
import { Virtuoso, type ItemContent } from 'react-virtuoso';

export type UnknownData = Record<string | number, unknown>;
export type Context = Record<string, string | number | boolean>;

export type ScrollFloatProps<T> = {
  data: T[];
  itemContent: ItemContent<T, Context>;
};

export const ScrollFloat = <T extends UnknownData>({
  data,
  itemContent,
}: ScrollFloatProps<T>) => {
  return (
    <Virtuoso
      style={{ height: 400 }}
      totalCount={data.length}
      itemContent={itemContent}
    />
  );
};
