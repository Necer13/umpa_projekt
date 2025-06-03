"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { Playlist } from "@/components/playlists/playlist"
import { getPlaylists } from "../lib/spotify"
import { PlaylistList } from "@/components/playlists/playlistList"
import { AuthState } from "@/components/states/AuthState"
import { ErrorState } from "@/components/states/ErrorState"
import { LoadingState } from "@/components/states/LoadingState"

export default function RecentlyPlayed() {
    const { data: session } = useSession()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [playlists, setPlaylists] = useState<Playlist[]>([])
    useEffect(() => {
        const fetchPlaylists = async () => {
            if (!session?.accessToken) {
                setError("Not authenticated")
                setLoading(false)
                return
            }

            try {
                const data = await getPlaylists(session.accessToken)
                setPlaylists(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred")
            } finally {
                setLoading(false)
            }
        }

        if (session) {
            fetchPlaylists()
        }
    }, [session])

    if (!session) {
        return <AuthState />
    }

    if (loading) {
        return <LoadingState />
    }

    return (
        <>
            <PlaylistList playlists={playlists} />
        </>
    )

}