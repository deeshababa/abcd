import { useRouter } from "next/router";

export default function A() {
  const router = useRouter();
  console.log(router);
  return <div>a</div>;
}
