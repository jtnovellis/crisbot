import Image from 'next/image'

export function UserAvatar() {
  return (
    <Image
      src={'/400x400.jpg'}
      width={50}
      height={50}
      alt='crisbot profile'
      className='rounded-full'
    />
  )
}
