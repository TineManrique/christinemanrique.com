import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const BlogPost = () => {
    const data = useStaticQuery(graphql`
    query {
        blog: allMarkdownRemark {
          posts: nodes {
            frontmatter {
              date(fromNow: true)
              title
              author
            }
            excerpt
            id
          }
        }
      }
    `)

    const { posts } = data.blog;

    return (
        <div>
        <h1>My blog posts</h1>

        {posts.map(post => (
            <article key={post.id}>
            <h2>{post.frontmatter.title}</h2>
            <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
            <p>{post.excerpt}</p>
            </article>
        ))}
        </div>
    )
}

export default BlogPost;