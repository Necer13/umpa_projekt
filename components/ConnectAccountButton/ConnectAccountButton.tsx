"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function ConnectAccountButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="p-8 min-w-120 bg-neutral-900 rounded-xl">
        <p className="text-white font-bold text-2xl mb-6">Signed In as</p>
        <div className="flex items-center gap-4 w-full">
          {session?.user?.image && (
            <img
              src={session.user.image}
              alt={`${session.user.name}'s profile picture`}
              className="w-16 h-16 rounded-full mb-2"
            />
          )}
          <span className="bold-txt">{session?.user?.name}</span>
        </div>
        <p
          className="opacity-70 mt-8 underline cursor-pointer"
          onClick={() => signOut()}
        >
          Sign Out
        </p>
      </div>
    )
  } else {
    return (
      <button
        onClick={() => signIn()}
        className="shadow-primary w-56 h-16 rounded-xl bg-white border-0 text-black text-3xl active:scale-[0.99] m-6"
      >
        Sign In
      </button>
    )
  }
}
