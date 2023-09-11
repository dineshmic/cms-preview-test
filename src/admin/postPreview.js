import React from "react";
//import Head from "next/head";
import Script from 'next/script'
import WebsiteHeader from '../components/websiteHeader';
import WebsiteFooter from '../components/websiteFooter';

export default class BlogPagePreview extends React.Component {
    render() {
        const { entry } = this.props;

        return (
            <div>
                
                <div>
                    <WebsiteHeader />
                    <div className="section-34 _2 wf-section">
                        <div className="div-block-197">
                            <h1 className="heading-42">{entry.getIn(['data', 'blogTitle'])}</h1>
                            <p className="paragraph-33">{entry.getIn(['data', 'blogDescription'])}</p>
                            <p className="paragraph-31"><strong>{entry.getIn(['data', 'author'])}</strong> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-span">{entry.getIn(['data', 'publishDate'])} &nbsp;&nbsp;&nbsp;&nbsp;{entry.getIn(['data', 'timeToRead'])}</span></p>
                            <img src={entry.getIn(['data', 'blogImage'])} loading="lazy" width={1119} sizes="(max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1279px) 800px, (max-width: 1439px) 59vw, 800px" alt="" className="image-64" />
                            <div dangerouslySetInnerHTML={{ __html: entry.getIn(['data', 'body']) }}></div>
                        </div>
                    </div>
                    <WebsiteFooter />
                </div>
                <Script id="script-1" src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=605c57757b3ae676ffca1b7b" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></Script>
                <Script id="script-2" src="js/webflow.js" type="text/javascript"></Script>
                {/* [if lte IE 9]><Script id="script-3" src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></Script><![endif] */}
            </div>
        );
    }
}