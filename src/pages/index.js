import React from 'react'
import Link from 'gatsby-link'
import WidgetDrip from "../components/widget-drip"
import WidgetPromo from "../components/widget-promo"
import WidgetSearch from "../components/widget-search"
import WidgetPromoArticles from "../components/widget-promo-articles"

const IndexPage = ({ data }) => {

    return (

        <div className="body-right-sidebar mobile">
            <div className="container container-outer">
                <main className="main-content clearfix">
                    <div className="page-content">
                        <p style={{marginBottom: '0px'}}>
                            <img
                                src="https://d33wubrfki0l68.cloudfront.net/7189f9b89a37ec7a5beafb61f80adc6b342ebe0f/55568/img/home.jpg"
                                alt="alt title" title="hover title"/>
                        </p>
                        <hr style={{marginBottom: '7px'}}/>
                        <p style={{fontSize: '17px', marginBottom: '0px'}}>Welcome to Simple Healthy News! We are a
                            small health-conscious tribe who all want to live vibrant,
                            healthy lives no matter our age. We want to help others do the same! If this is your first
                            time here,
                            be sure to read our What We Believe section and see if we are your kind of people. We sure
                            hope so!
                        </p>
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

    );
}

export default IndexPage;


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (sort: {fields: [frontmatter___date], order: DESC}) {
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