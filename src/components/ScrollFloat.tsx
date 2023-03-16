// import { useState } from 'react';
import { Virtuoso, type ItemContent, type VirtuosoProps } from 'react-virtuoso';

export type UnknownData = Record<string, unknown>;
export type Context = Record<string, string | number | boolean>;

export type ScrollFloatProps<D, C> = {
  data: D[];
  itemContent: ItemContent<D, C>;
  activeIndex?: number;
} & VirtuosoProps<D, C>;

export const ScrollFloat = <D extends UnknownData, C extends Context>({
  data,
  itemContent,
  ...rest
}: ScrollFloatProps<D, C>) => {
  return (
    <Virtuoso
      style={{ height: 700 }}
      totalCount={data.length}
      itemContent={itemContent}
      {...rest}
    />
  );
};
