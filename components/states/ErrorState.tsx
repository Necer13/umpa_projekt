interface ErrorStateProps {
  message: string
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg text-red-500">{message}</p>
    </div>
  )
}
