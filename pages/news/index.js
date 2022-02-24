//ourdomain.com/news
import { Fragment } from 'react';
function NewsPage(){
    return <Fragment>
             <h1>The News page</h1>
             <ul>
                 <li><a href="/news/nextjs-is-a-great-framework">NextJs is a great framework</a></li>
                 <li>Something else</li>
             </ul>
           </Fragment>
 }
 export default NewsPage;