import Component from './Component';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-black text-white">
      <main className="w-full max-w-7xl flex flex-col gap-8 items-center sm:items-start">
        <Component />
      </main>
    </div>
  );
}
