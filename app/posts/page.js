import Link from "next/link";
import Todo from "../components/Todo";
import style from "./post.module.css";
export default async function Posts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts' , 
  { next:{revalidate:120} } )
  const posts = await response.json();
  const postJsx =  posts.map(post =>
    <Link href={`/posts/${post.id}`} key={post.id} className={style.card}>
      <h2>{post.title}</h2> 
      <h6>author id:  {post.userId}</h6>
      <p>{post.body}</p>
    </Link>
  )
  return (
    <div>
      <h1>Posts Page</h1>
      <div className={style.posts_container}>{postJsx}</div>

      <div>

      </div>
    </div>
  )
}
