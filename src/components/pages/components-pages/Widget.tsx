import { MdFeedback } from 'react-icons/md'

export default function Widget(){
    return(
        <div className='absolute right-4 bottom-4 overflow-hidden' >
            <button className='bg-brand-500 rounded-full p-3 flex items-center group'>
                <MdFeedback className='text-white text-3xl'/>
                <span className='text-white max-w-0 group-hover:max-w-xs transition-all duration-700'>
                    <span className='px-2'></span>
                        Feedback
                    <span className='px-2'></span>
                </span>
            </button>
        </div>
    )
}