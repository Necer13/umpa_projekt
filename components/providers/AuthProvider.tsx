"use client"

import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

export default function AuthProvider({ children }: PropsWithChildren) {
  // SessionProvider for some reason rejects children type which should match
  // @ts-ignore
  return <SessionProvider>{children}</SessionProvider>
}
