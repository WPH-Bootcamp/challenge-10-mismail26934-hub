import { Skeleton } from '@/components/shared/Skeleton';

export function RestaurantCardSkeleton() {
  return (
    <div className='flex items-center gap-3 rounded-2xl border border-neutral-100 bg-white p-3'>
      <Skeleton className='h-14 w-14 shrink-0 rounded-xl' />
      <div className='flex-1 space-y-2'>
        <Skeleton className='h-4 w-3/4 rounded' />
        <Skeleton className='h-3 w-1/4 rounded' />
        <Skeleton className='h-3 w-1/2 rounded' />
      </div>
    </div>
  );
}

export function MenuCardSkeleton() {
  return (
    <div className='overflow-hidden rounded-2xl border border-neutral-100 bg-white'>
      <Skeleton className='h-36 w-full rounded-none' />
      <div className='space-y-2 p-3'>
        <Skeleton className='h-4 w-3/4 rounded' />
        <Skeleton className='h-4 w-1/2 rounded' />
        <Skeleton className='h-8 w-full rounded-full' />
      </div>
    </div>
  );
}
