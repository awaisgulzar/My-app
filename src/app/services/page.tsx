"use client";
import { useRouter } from "next/navigation";
export default function Services() {
  let router = useRouter();
  return (
    <main>
      <button onClick={() => router.back()}>Back</button>
    </main>
  );
}
