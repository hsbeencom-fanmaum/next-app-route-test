import Link from "next/link";

export default async function PokemonHomePage() {
  const limit = 10;
  const offset = 0;
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?" +
      new URLSearchParams({
        limit: limit.toString(),
        offset: offset.toString(),
      }),
  );
  const data = await res.json();
  const list: any[] = data.results;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {list.map((elem) => (
        <Link key={elem.url} href={`/pokemon/${elem.url.split("/").at(-2)}`}>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              {elem.name}&nbsp;
              <code className="font-mono font-bold">{elem.url}</code>
            </p>
          </div>
        </Link>
      ))}
    </main>
  );
}
