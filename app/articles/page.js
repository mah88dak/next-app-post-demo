import Link from "next/link"

export default function Articles() {
  return (
    <div>
      <h1>Articles Page</h1>
      <br />
        <Link style={{backgroundColor:'#fff' , 
        color:'#333' , padding:'0.5rem 1rem'}} href='/articles/featuredArticles'>featured Articles</Link>
    </div>
  )
}
