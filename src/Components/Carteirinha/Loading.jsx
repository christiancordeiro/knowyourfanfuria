const Loading = () => {
  return (
    <svg className="size-6 animate-spin text-white" viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeDasharray="40 20"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Loading
