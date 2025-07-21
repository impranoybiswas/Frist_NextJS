import React from 'react'
import Card from './ui/Card'

const posts = [
    {id: 1, title: 'Post 1', body: 'Body 1'},
    {id: 2, title: 'Post 3', body: 'Body 2'},
    {id: 3, title: 'Post 3', body: 'Body 3'},
    {id: 4, title: 'Post 4', body: 'Body 4'},
    {id: 5, title: 'Post 5', body: 'Body 5'},
]

export default function Posts() {
  return (
    <section className='flex flex-col justify-center items-center gap-2  h-dvh container mx-auto bg-red-50'>
      {
        posts.map(post => (
          <Card key={post.id} post={post} />
        ))
      }
    </section>
  )
}
