import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const BlogPost = () => {
    const data = useStaticQuery(graphql`
    query {
        blog: allMarkdownRemark {
          posts: nodes {
            frontmatter {
              date(fromNow: true)
              title
              author
              image
            }
            excerpt
            id
          }
        }
        allImageSharp {
          edges {  
            node {
              id
              fluid(quality: 100, maxHeight: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)

    const { posts } = data.blog;
    const images = data.allImageSharp.edges.flatMap(ed => ed.node);
    return (
        <Fade top={true} duration={1000} delay={500} distance="20px">
        <Container>
          <h1 style={{textAlign: "left"}}>Blog Posts</h1>
          <Row>
            {posts.map(post => {
              const postImage = images.find(im => im.fluid.originalName == post.frontmatter.image);

              return (
              <Col lg={4} md={6} sm={12} className="mt-4" key={post.id}>
                <Card style={{ height: "100%"}}>
                  <Img fluid={postImage.fluid} className="post-image"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: "20px",fontWeight:"600"}}>{post.frontmatter.title}</Card.Title>
                    <Card.Text>
                      {post.excerpt}
                    </Card.Text>
                    {(() => {
                      if (post.frontmatter.isFinished) {
                        return (
                          <>
                            <Card.Subtitle className="mb-2 text-muted">
                            {post.frontmatter.author}, {post.frontmatter.date}
                            </Card.Subtitle>
                            <Button className="cta-btn cta-btn--secondary">See Whole Post</Button>
                          </>
                        )
                      }
                      return <Badge variant="secondary">Coming Soon</Badge>
                    })()}

                  </Card.Body>
                </Card>
                </Col>
            )})}
          </Row>
        </Container>
        </Fade>
    )
}

export default BlogPost;