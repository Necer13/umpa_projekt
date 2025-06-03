import { Playlist } from "./playlist";

interface PlaylistItemProps {
    playlist: Playlist;
    index: number;
}

export function PlaylistItem({ playlist, index }: PlaylistItemProps) {

    const imageUrl = playlist.images && playlist.images.length > 0
        ? playlist.images[0].url
        : '/default-image.png';
    return (
        <div
            key={`${playlist.id}-${index}`}
            className="flex items-center space-x-4 p-4 bg-neutral-900 rounded-lg shadow"
        >
            <img
                src={imageUrl}
                alt={playlist.name}
                className="w-16 h-16 rounded"
            />
            <div>
                <h2 className="text-lg font-semibold">{playlist.name}</h2>
                <p className="text-gray-400 text-sm">Utworów: {playlist.tracks.total}</p>
                <p className="text-xs text-gray-500">Twórca: {playlist.owner.display_name}</p>
            </div>
        </div>
    );
}
