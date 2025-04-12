import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">Pretty Stunna Mail</h1>
      <ul className="space-y-2">
        <li><Link href="/inbox" className="text-blue-500 underline">📥 Go to Inbox</Link></li>
        <li><Link href="/compose" className="text-blue-500 underline">✍️ Compose a Message</Link></li>
        <li><Link href="/api/auth/signin" className="text-blue-500 underline">🔐 Sign In</Link></li>
        <li><Link href="/api/hello" className="text-blue-500 underline">✅ Test API</Link></li>
      </ul>
    </main>
  );
}
