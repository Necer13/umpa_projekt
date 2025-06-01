import { Track } from "@/app/lib/spotify"
import { TrackItem } from "./TrackItem"

interface TrackListProps {
  tracks: Track[]
}

export function TrackList({ tracks }: TrackListProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recently Played Songs</h1>
      <div className="grid gap-4">
        {tracks.map((track, index) => (
          <TrackItem
            key={`${track.track.name}-${index}`}
            track={track}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
