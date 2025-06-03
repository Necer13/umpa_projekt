export interface Playlist {
    id: string;
    name: string;
    description: string;
    images: { url: string }[];
    owner: {
        display_name: string;
    };
    tracks: {
        total: number;
    };
}