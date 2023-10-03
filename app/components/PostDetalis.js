
import style from './page.module.css'

export default async function PostDetalis({ id }) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  const post = await response.json();
  return (

    <div className={style.postCard} >
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div >
  )
}
