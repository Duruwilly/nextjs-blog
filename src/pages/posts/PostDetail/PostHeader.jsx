import Image from 'next/image'
import React from 'react'

const PostHeader = (props) => {
    const {title, image} = props
  return (
    <header className='bg-slate-5'>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={150} />
    </header>
  )
}

export default PostHeader