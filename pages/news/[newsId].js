// our-domain.com/news/something-important

import { useRouter } from 'next/router';

function DetailPage() {
  const route = useRouter()

  const identifier = route.query.newsId

  console.log(identifier)

  return <h1>{`Now you got to: ${identifier}`}</h1>
}

export default DetailPage
