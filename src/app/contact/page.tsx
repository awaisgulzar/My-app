"use client";
import { useRouter } from "next/navigation";
export default function Contact() {
  let router = useRouter();
  return (
    <main>
      <button onClick={() => router.back()}>Back</button>
    </main>
  );
}
