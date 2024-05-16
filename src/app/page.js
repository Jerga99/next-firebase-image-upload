import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Image Upload App!</h1>
      <nav>
        <ul>
          <li><Link href="/upload">Upload Image</Link></li>
          <li><Link href="/gallery">View Gallery</Link></li>
        </ul>
      </nav>
    </main>
  );
}
