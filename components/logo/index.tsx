import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ 
  width = 120, 
  height = 40, 
  className = '' 
}: LogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src="/logo.png"
        alt="GPT Prompt Store Logo"
        width={width}
        height={height}
        priority
      />
    </Link>
  )
}
