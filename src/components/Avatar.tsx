interface AvatarProps {
  children: React.ReactNode
}

export function Avatar({ children }: AvatarProps) {
  return (
    <figure className='flex items-center justify-center'>{children}</figure>
  )
}
