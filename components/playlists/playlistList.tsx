import { Playlist } from "./playlist"
import { PlaylistItem } from "./playlistItem"

interface PlaylistListProps {
    playlists: Playlist[]
}


export function PlaylistList({ playlists }: PlaylistListProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Playlists</h1>
            <div className="grid gap-4">
                {playlists.map((playlist, index) => (
                    <PlaylistItem
                        key={`${playlist.name}-${index}`}
                        playlist={playlist}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}