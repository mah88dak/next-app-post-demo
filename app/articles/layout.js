export const metadata = {
  title : "Article"
}
export default function layout({children}) {
  return (
    <div>
      <h1>Articles Layout</h1>
   
      <div style={{margin:'2rem',backgroundColor:'#55f', padding:'1.5rem' , borderRadius:'1rem'} }>
      {children}
      </div>
    </div>
  )
}
