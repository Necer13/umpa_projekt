import { Track } from "@/app/lib/spotify"

interface TrackItemProps {
  track: Track
  index: number
}

export function TrackItem({ track, index }: TrackItemProps) {
  return (
    <div
      key={`${track.track.name}-${index}`}
      className="flex items-center space-x-4 p-4 bg-neutral-900 rounded-lg shadow"
    >
      <img
        src={track.track.album.images[0]?.url}
        alt={track.track.album.name}
        className="w-16 h-16 rounded"
      />
      <div>
        <h2 className="text-lg font-semibold">{track.track.name}</h2>
        <p className="text-gray-400">
          {track.track.artists.map((artist) => artist.name).join(", ")}
        </p>
        <p className="text-sm text-gray-500">{track.track.album.name}</p>
        <p className="text-xs text-gray-400">
          {new Date(track.played_at).toLocaleString()}
        </p>
      </div>
    </div>
  )
}
