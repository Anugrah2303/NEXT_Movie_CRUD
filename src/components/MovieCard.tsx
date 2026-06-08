import Image from 'next/image'
import { FaEdit } from 'react-icons/fa'
import Icon from './Icon'
import { IoTrashBinOutline } from 'react-icons/io5'
import type { moviesDataIF } from '@/types/types'
import { useRouter } from 'next/navigation'
import { deleteMovie } from '@/utils/movieFunctions'

const MovieCard = ({ title, poster, duration, genre, language, rating, id }: moviesDataIF) => {
    const navigate = useRouter();
    return (
        <>
            <div className='shadow-(--shadow-sm) px-6 py-3 w-75 h-105 relative group overflow-hidden'>
                <div className='relative h-85 w-full' onClick={() => navigate.push(`/${id}`)}>
                    <Image fill src={poster} alt={title} />
                </div>
                <h2 className='mt-4 text-xl'>{title}</h2>
                <div className=' transition-all duration-200 flex flex-col gap-7 absolute left-0 right-0 -bottom-110 group-hover:bottom-0 group-hover:top-[50%]  bg-(--surface-2)/70 justify-center items-center'>
                    <div className='flex w-full px-5 text-(--text-secondary) gap-3'>
                        {
                            genre.map((g, i) => (
                                <span key={i} className='border-(--text-muted) px-2 py-0.5 bg-(--text-muted)/30 rounded-full border-2'>{g}</span>
                            ))
                        }
                    </div>
                    <div className='flex justify-between w-full px-5 mb-15 text-(--text-secondary)'>
                        <h4 className='text-lg'>Lang: {language}</h4>
                        <h4>Duration: {duration}m</h4>
                    </div>
                    <h4 className='absolute top-2 right-5 border-(--text-muted) px-2 py-0.5 bg-(--text-muted)/30 rounded-full border-2'>{rating}⭐</h4>
                    <div className='absolute bottom-0 left-0 right-0 flex justify-evenly gap-7 px-5 mb-4'>
                        <Icon Icon={FaEdit} options={{ size: 20 }} className='bg-(--success) w-full' onClick={() => navigate.push(`/update-movie/${id}`)} />
                        <Icon Icon={IoTrashBinOutline} options={{ size: 20 }} className='bg-(--danger) w-full' onClick={() => {
                            deleteMovie(id as string)
                            window.location.reload();
                        }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard

/*

┌─────────────────────┐
│                     │
│       Poster        │
│                     │
├─────────────────────┤
│ Movie Title    ⭐4.5│
│                     │
│ Description...      │
│                     │
│ [Action] [Drama]    │
│ [Sci-Fi]            │
│                     │
│ English • 135 min   │
├─────────────────────┤
│ Edit      Delete    │
└─────────────────────┘

*/ 