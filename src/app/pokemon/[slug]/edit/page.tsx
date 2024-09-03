"use client";

import { ChangeEvent, useEffect, useState } from "react";

export default function PokemonEditPage({
  params,
}: {
  params: { slug: string };
}) {
  const [name, setName] = useState("");
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`).then(
      async (res) => {
        const data = await res.json();
        setName(data.name);
      },
    );
  }, []);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <input
            type="text"
            value={name}
            onChange={onChange}
            className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          ></input>
        </div>
        <div>
          <button type="submit">수정</button>
        </div>
      </form>
    </main>
  );
}
