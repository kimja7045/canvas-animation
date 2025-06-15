import type { MetaFunction } from '@remix-run/node';
import { Main } from 'widget/main/Main';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-1 h-screen">
      <Main />
    </div>
  );
}
