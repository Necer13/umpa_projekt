export interface Track {
  track: {
    name: string
    artists: { name: string }[]
    album: {
      name: string
      images: { url: string }[]
    }
  }
  played_at: string
}

export async function getRecentlyPlayed(accessToken: string) {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=20",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch recently played songs")
  }

  const data = await response.json()
  return data.items as Track[]
}
