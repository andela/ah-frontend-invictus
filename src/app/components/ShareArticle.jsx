import React from 'react';
import { Helmet } from "react-helmet";
import { APP_URLS } from '../../utilities';
import '../../assets/styles/shareArticleButtons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

export const socialRedirect = (url) => {
  window.open(url, '_blank');
};

export default ({ title, description, social_links: { facebook, twitter, email } }) => {
  const datas = [
    { media: facebook, icon: faFacebookSquare, share: "Facebook" },
    { media: twitter, icon: faTwitterSquare, share: "Twitter" },
    { media: email, icon: faEnvelopeSquare, share: "Email" }
  ];
  const links = datas.map(data => (
    <div className="col-sm-4 icon toolstip">
      <FontAwesomeIcon onClick={() => socialRedirect(data.media)} icon={data.icon} />
      <span className="toolstiptext">Share to {data.share}</span>
    </div>
  ));
  return (
    <div className="shareicons float-right">
      <Helmet>
        <title>{title}</title>
        <url>{APP_URLS.FRONT_END}</url>
        <type>article</type>
        <description>{description}</description>
        <image>https://picsum.photos/600/300</image>
        <meta property="og:url" content={APP_URLS.FRONT_END} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://picsum.photos/600/300" />
      </Helmet>
      <div className="row">
        {links}
      </div>
    </div>
  );
};
