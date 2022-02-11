import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage  } from "gatsby-plugin-image"

const Card = ({ article }) => {
    //console.log("Card.render article", article);
    return (
        <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
            <div className="uk-card uk-card-muted">
                <div className="uk-card-media-top">
                    <GatsbyImage
                        alt="alt text"
                        image={getImage(article.node.image)}                       
                    />
                </div>
                <div className="uk-card-body">
                    <p id="category" className="uk-text-uppercase">
                        {article.node.category.name}
                    </p>
                    <p id="title" className="uk-text-large">
                        {article.node.title}
                    </p>
                    <div>
                        <hr className="uk-divider-small" />
                        <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                            <div>                    
                                {article.node.author.picture && (
                                    <GatsbyImage
                                        alt="alt text"
                                        image={getImage(article.node.author.picture)}                                              
                                    />                   
                                )}
                            </div>
                            <div className="uk-width-expand">
                                <p className="uk-margin-remove-bottom">
                                    {article.node.author.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;