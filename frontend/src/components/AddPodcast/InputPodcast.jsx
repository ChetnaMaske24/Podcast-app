import React from 'react'

const InputPodcast = () => {
  return (
    <div className='my-4 px-4 lg:px-12'>
        <h1 className='text-2xl font-semibold'>Create your podcast</h1>
        <div className='mt-5 flex flex-col lg:flex-row items-center justify-between gap-4'>
            <div className='w-full lg:w-2/6 flex items-center justify-center lg:justify-start'>
            <div className='size-[20vh] lg:size[60vh] flex items-center justify-center hover:bg-slate-50 transition-all duration-300' style={{border:"1px dashed black"}}>
              <input type='file' accept='image/*' id='file' name='frontImage' className='hidden' />
              <label htmlFor='file' className='text-xl-h-[100%] w-[100%] hover:cursor-pointer flex items-center justify-center hover:bg-zinc-200 transition-all duration-300'><div>Drage and drop the thumbnail or Click to browse</div></label>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default InputPodcast
