import { ReactNode } from 'react'

interface StatusProps {
  children: ReactNode
  statusColor: 'green' | 'yellow' | 'red'
}

export function Status({ children, statusColor }: StatusProps) {
  const colors = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
  }

  const statusClass = colors[statusColor]

  return (
    <div className="flex items-center justify-center gap-3">
      <span className={`${statusClass} rounded-full w-3 h-3`} />
      {children}
    </div>
  )
}
