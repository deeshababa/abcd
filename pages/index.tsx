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
        <Link href="/routes/a">b</Link>
      </li>
    </ul>
  );
}
