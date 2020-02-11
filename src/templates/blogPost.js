import React from 'react'
import { graphql, Link } from 'gatsby'

const Template = ({data, pageContext}) => {
  const {next, prev} = pageContext

  const {markdownRemark} = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <div>
      <h1 style={{fontFamily: 'avenir'}}>{title}</h1>
      <div className="blogpost"
        dangerouslySetInnerHTML={{__html: html}}
        style={{
          fontFamily: 'avenir'
        }}
      />

      <div style={{marginBotton: '1rem', fontFamily: 'avenir'}}>
        {next &&
          <Link to={next.frontmatter.path}>
            Next
          </Link>
        }
        {prev &&
          <Link to={prev.frontmatter.path}>
            Prev
          </Link>
        }
      </div>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template