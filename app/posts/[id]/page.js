import PostDetalis from '@/app/components/PostDetalis';
import { Suspense } from 'react';
export default async function page({ params }) {
  const postId = params.id;
  const msgWait = <h4 style={{color : '#ff0'}}> palse witting loading post details ...</h4>;

  return (
    <>

      <div>post Details</div>
      <Suspense fallback={msgWait}>
        <PostDetalis id={postId} />
      </Suspense>

    </>
  )
}
