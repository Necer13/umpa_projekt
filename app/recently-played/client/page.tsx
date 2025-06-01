"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { TrackList } from "@/components/recently-played/TrackList"
import { LoadingState } from "@/components/recently-played/LoadingState"
import { ErrorState } from "@/components/recently-played/ErrorState"
import { AuthState } from "@/components/recently-played/AuthState"
import { getRecentlyPlayed, Track } from "@/app/lib/spotify"

export default function RecentlyPlayed() {
  const { data: session } = useSession()
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      if (!session?.accessToken) {
        setError("Not authenticated")
        setLoading(false)
        return
      }

      try {
        const data = await getRecentlyPlayed(session.accessToken)
        setTracks(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    if (session) {
      fetchRecentlyPlayed()
    }
  }, [session])

  if (!session) {
    return <AuthState />
  }

  if (loading) {
    return <LoadingState />
  }

  const filteredTracks = tracks.filter((track) => {
    const trackName = track.track?.name ?? ""
    const artistName = track.track?.artists?.[0]?.name ?? ""

    return (
      trackName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artistName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  if (error) {
    return <ErrorState message={error} />
  }

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Szukaj utworu lub wykonawcy..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <TrackList tracks={filteredTracks} />
    </div>
  )
}
