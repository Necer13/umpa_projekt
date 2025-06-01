import ConnectAccountButton from "@/components/ConnectAccountButton/ConnectAccountButton"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <ConnectAccountButton />
      <div className="flex flex-row gap-4">
        <Link
          href="/recently-played/client"
          className="mt-4 rounded-2xl p-4 bg-green-800 text-white font-medium"
        >
          Recently Played
        </Link>
      </div>
    </div>
  )
}
