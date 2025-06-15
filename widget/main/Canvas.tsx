import { ElementList } from './ElementList';

export const Canvas = () => {
  return (
    <div
      style={{ width: 400, height: 400, backgroundColor: 'white' }}
      className="flex justify-center items-center border border-gray-700 bg-white"
    >
      <ElementList />
    </div>
  );
};
