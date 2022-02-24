//ourdomain.com/news/something-important

import { useRouter } from 'next/router';

function DetailPage(){
    const router = useRouter();
    const newsId = router.query.newsId;
    // send a request to the backend api 
    // to fetch the newsitem with newsId
    return <h1>The Detail page</h1>
}
 export default DetailPage;