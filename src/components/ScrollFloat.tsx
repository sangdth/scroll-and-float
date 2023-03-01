import { Virtuoso } from 'react-virtuoso';

export type UnknownData = Record<string | number, unknown>;

export type ScrollFloatProps<T> = {
  data: T[];
};

export const ScrollFloat = <T extends UnknownData>({
  data,
}: ScrollFloatProps<T>) => {
  console.log('ScrollFloat', { data });

  return (
    <Virtuoso
      style={{ height: 400 }}
      totalCount={data.length}
      itemContent={(index) => {
        const item = data[index];
        console.log({ item });
        return (
          <div
            style={{
              backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#CDCDCD',
              padding: '1rem 0.5rem',
            }}
          >
            <h4>name</h4>
            <div style={{ marginTop: '1rem' }}>description</div>
          </div>
        );
      }}
    />
  );
};
