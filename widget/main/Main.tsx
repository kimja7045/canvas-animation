import { Canvas } from './Canvas';
import { MainHeader } from '../header/MainHeader';

export const Main = () => {
  return (
    <main className="flex flex-1 flex-col">
      <MainHeader />
      <div className="flex flex-1 justify-center items-center">
        <Canvas />
      </div>
    </main>
  );
};

// 343941
