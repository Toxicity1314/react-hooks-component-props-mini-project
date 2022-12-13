import React from 'react'
import Article from './Article'

function ArticleList({posts}){
   const postList = posts.map(post => <Article 
    title={post.title} 
    date = {post.date} 
    preview = {post.preview}/>)
    
    return(
        <main>
            {postList}
        </main>
    )
}


export default ArticleList