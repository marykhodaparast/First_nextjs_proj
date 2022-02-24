//ourdomain.com/news
import { Fragment } from 'react';
import Link from 'next/link';
function NewsPage(){
    return <Fragment>
             <h1>The News page</h1>
             <ul>
                 <li><Link href="/news/nextjs-is-a-great-framework">NextJs is a great framework</Link></li>
                 <li>Something else</li>
             </ul>
           </Fragment>
 }
 export default NewsPage;