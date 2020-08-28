module.exports = {
  siteMetadata: {
    title: `Scapari de Prezenta`,
    name: `Scapari de Prezenta`,
    siteUrl: `https://sdp.wtf`,
    description: `Scapari de Prezenta`,
    hero: {
      heading: `Scapari de Prezenta`,
      maxWidth: 652,
    },
    social: [
      {
        name: `facebook`,
        url: `https://www.facebook.com/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
