import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/a" as="/a">
          a
        </Link>
      </li>
      <li>
        <Link href="/routes/a" as="/b">
          b
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: `/routes/[a]`,
            query: {
              a: "Hello", // should be `title` not `id`
            },
          }}
        >
          dynamic link
        </Link>
        ;
      </li>
    </ul>
  );
}
