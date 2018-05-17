import React from "react";
import Link from "gatsby-link";

import WidgetDrip from "../components/widget-drip"
import WidgetPromo from "../components/widget-promo"
import WidgetSearch from "../components/widget-search"
import WidgetPromoArticles from "../components/widget-promo-articles"

export default ({ data }) => {
    const category = data.markdownRemark;
    return (
        <div className="body-right-sidebar mobile">
            <div className="container container-outer">
                <main className="main-content clearfix">
                    <div className="page-content">
                        <p style={{marginBottom: '0px'}}>
                            <img
                                src={category.frontmatter.image}
                                alt="alt title" title="hover title"/>
                        </p>
                        <hr style={{marginBottom: '7px'}}/>
                        <p style={{fontSize: '17px', marginBottom: '0px'}}>{category.frontmatter.description}</p>
                        <hr style={{marginBottom: '50px'}}/>
                    </div>




                    {data.allMarkdownRemark.edges.map(({node}) => (


                        (node.frontmatter.isArticle === 'yes') ? (
                                <article key={node.id} className="list-item clearfix">
                                    <figure className="list-thumbnail">
                                        <Link to={node.fields.slug}>
                                            <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title}/>
                                        </Link>
                                    </figure>
                                    <div className="list-content clearfix">
                                        <header className="list-header">
                                            <h3 className="list-title" style={{marginBottom: '10px'}}>
                                                <Link className="article-title"
                                                      to={node.fields.slug}>{node.frontmatter.title}</Link>
                                            </h3>
                                            <div className="list-meta meta">

                                                <svg className="icon icon-time" height="14" viewBox="0 0 16 16" width="14"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="m8-.0000003c-4.4 0-8 3.6-8 8 0 4.4000003 3.6 8.0000003 8 8.0000003 4.4 0 8-3.6 8-8.0000003 0-4.4-3.6-8-8-8zm0 14.4000003c-3.52 0-6.4-2.88-6.4-6.4000003 0-3.52 2.88-6.4 6.4-6.4 3.52 0 6.4 2.88 6.4 6.4 0 3.5200003-2.88 6.4000003-6.4 6.4000003zm.4-10.4000003h-1.2v4.8l4.16 2.5600003.64-1.04-3.6-2.1600003z"></path>
                                                </svg>


                                                <time className="list__meta-date"
                                                      dateTime="2017-09-28T00:00:00">{node.frontmatter.date}</time>
                                            </div>
                                        </header>
                                        <div className="list-excerpt">
                                            <p>{node.frontmatter.description}</p>
                                        </div>
                                        <div className="list-footer">
                                            <Link className="list-footer-readmore btn"
                                                  to={node.fields.slug}>Read more…</Link>
                                        </div>
                                    </div>
                                </article>)
                            : null
                    ))}







                    <WidgetDrip/>



                </main>

                <aside className="sidebar">
                    <WidgetPromo/>

                    <WidgetSearch/>

                    <WidgetPromoArticles/>
                </aside>
            </div>
        </div>
    )
};


export const query = graphql`
  query categoryQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        image
        description
      }
    }
    allMarkdownRemark (
    filter: {frontmatter: {parentSlug : {eq: $slug}}}
  ) {
    totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            thumbnail
            description
            isArticle
            parentSlug
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

