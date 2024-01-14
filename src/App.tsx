import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'

import './global.css'

const posts : PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/arturmois.png',
      name: 'Artur Moisés',
      role: 'CTO',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto' },
      { type: 'link', content: 'jane.design/doctor' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto' },
      { type: 'link', content: 'jane.design/doctor' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
]

export function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })}
          </main>
        </div>
      </div>
    </>
  )
}
