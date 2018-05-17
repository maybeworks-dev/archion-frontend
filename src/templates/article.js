import React from "react";
import Link from "gatsby-link";

import WidgetDrip from "../components/widget-drip"
import WidgetPromo from "../components/widget-promo"
import WidgetSearch from "../components/widget-search"
import WidgetPromoArticles from "../components/widget-promo-articles"
import WidgetRecent from "../components/widget-recent"

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <div className="wrapper clearfix" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                <main className="main-content content">
                    <article>
                        <header>
                            <h1>{post.frontmatter.title}</h1>
                            <p className="post-meta meta">
                                <svg className="icon icon-time" height="14" viewBox="0 0 16 16" width="14"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m8-.0000003c-4.4 0-8 3.6-8 8 0 4.4000003 3.6 8.0000003 8 8.0000003 4.4 0 8-3.6 8-8.0000003 0-4.4-3.6-8-8-8zm0 14.4000003c-3.52 0-6.4-2.88-6.4-6.4000003 0-3.52 2.88-6.4 6.4-6.4 3.52 0 6.4 2.88 6.4 6.4 0 3.5200003-2.88 6.4000003-6.4 6.4000003zm.4-10.4000003h-1.2v4.8l4.16 2.5600003.64-1.04-3.6-2.1600003z"></path>
                                </svg>
                                <time style={{verticalAlign: 'middle'}} dateTime="2017-09-28T00:00:00">{post.frontmatter.date}</time>
                                <span>
                            <svg className="icon icon-category" height="16" viewBox="0 0 16 16" width="16"
                                 xmlns="http://www.w3.org/2000/svg"><path d="m7 2l1 2h8v11h-16v-13z"></path></svg>

                                    {JSON.parse(post.frontmatter.categoriesLink).map(({ url, title }) => (
                                        <Link key={title} className="meta-categories-link" to={url} rel="category">{title}</Link>
                                    ))}

                        </span>
                            </p>
                        </header>
                        <div className="post-content clearfix">
                            <figure className="post-thumbnail">
                                <img style={{maxWidth: '100%', height: 'auto', verticalAlign: 'bottom'}}
                                     src={post.frontmatter.image}
                                     alt={post.frontmatter.title}/>
                            </figure>

                            <div dangerouslySetInnerHTML={{ __html: post.html }}/>


                            <p><br/></p>
                            <hr/>
                            <hr/>
                            <br/>
                        </div>

                        <div className="post__tags tags clearfix">
                            <svg className="icon icon-tag" viewBox="0 0 16 16"
                                 style={{width: '32px', height: '32px'}}
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m4.73135 3.3795002q0-.5597-.39604-.9557-.39604-.3961-.95577-.3961-.55974 0-.95578.3961-.39604.396-.39604.9557 0 .5598.39604.9558.39604.3961.95578.3961.55973 0 .95577-.3961.39604-.396.39604-.9558zm11.26865 6.0832q0 .5596998-.39076.9504998l-5.18548 5.196q-.41188.3908-.9610504.3908-.55974 0-.9505-.3908l-7.5511496-7.5616998q-.40132-.3907-.68119-1.0666-.27987-.6759-.27987-1.2357v-4.3934q0-.54920004.40132-.95050004.40132-.4013.9505-.4013h4.39339q.55974 0 1.23565.2799.67591.2798 1.07723.6812l7.55115 7.54060004q.39076.4118.39076.961z"></path>
                            </svg>

                            <ul style={{listStyle: 'none', marginBottom: '0px', marginLeft: '0px'}}>
                                <li className="tags-item">
                                    <Link className="tags-link" to="/" rel="tag">high blood pressure</Link>
                                </li>
                                <li className="tags-item">
                                    <Link className="tags-link" to="/" rel="tag">hypertension</Link>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <div className="authorbox clearfix">
                        <figure className="authorbox-avatar">
                            <img alt="Sam Robbins avatar"
                                 src="https://d33wubrfki0l68.cloudfront.net/e2bdd821442abc0c358064bab0f2fff1eb6c3283/53eaf/img/avatar.png"
                                 className="avatar" height="90" width="90"/>
                        </figure>
                        <div className="authorbox-header">
                            <span className="authorbox-name" style={{fontSize: '1rem', fontWeight: '700'}}>About Sam Robbins</span>
                        </div>
                    </div>
                    <WidgetDrip/>
                </main>
                <aside>
                    <WidgetPromo/>

                    <WidgetSearch/>

                    <WidgetRecent/>

                    <WidgetPromoArticles/>
                </aside>
            </div>
        </div>
    );
};

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image
        categoriesLink
      }
    }
  }
`;