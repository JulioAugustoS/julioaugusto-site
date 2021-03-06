require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Julio Augusto - Mobile Software Engineer`,
    name: `Julio Augusto`,
    siteUrl: `https://julioaugusto.dev`,
    description: `Technical Leader at @gok-dev - Developer Javascript - React, React Native, Vue, TypeScript, GraphQL, Redux, NodeJS`,
    hero: {
      heading: ``,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Julio_Augusto_S`,
      },
      {
        name: `github`,
        url: `https://github.com/JulioAugustoS`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/julio.developer`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/julio-augusto`,
      },
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UCt6k57ufGtiyogtLUYNMfLA?view_as=subscriber`
      }
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        authorsPage: true,
        mailchimp: true,
        sources: {
          contentful: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://app.us10.list-manage.com/subscribe/post?u=6541a44696fe1447240ec4827&amp;id=0de8352533',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Julio Augusto - Mobile Software Engineer`,
        short_name: `Julio Augusto`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3498db`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#3498db`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://julioaugusto.dev`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
