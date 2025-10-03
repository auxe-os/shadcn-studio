import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center', className)} aria-label='auxe.net'>
      <div className='card-sim h-9 w-9' />
      <span className='ms-2.5 text-xl font-semibold'>auxe.net</span>
    </div>
  )
}

export default Logo
