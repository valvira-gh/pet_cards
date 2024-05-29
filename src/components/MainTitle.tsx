import Link from "next/link";

export const MainTitle = () => {
  return (
    <section className="flex flex-col items-center">
      <Link href={`/`}>
        <h1 className="text-6xl">Pet Cards</h1>
      </Link>
    </section>
  );
};
