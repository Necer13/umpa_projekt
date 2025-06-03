import Link from "next/link"

export default function PlaylistsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="pt-8">
            <Link href="/" className="text-green-500 p-8">
                Back to Home
            </Link>
            {children}
        </div>
    )
}
