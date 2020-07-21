module.exports = {
  siteMetadata: {
    title: `RealMelon`,
    author: {
      name: `Tarun Nagpal`,
      summary: `who loves JavaScript and try to make web a better place for information`,
    },
    description: `RealMelon - A place which can help you read about the latest trends in technology and travel. 
    We share the content based on our experience and uses. You will finds topic like JavaScript, react, html, redux and much more.`,
    siteUrl: `https://realmelon.com/`,
    social: {
      twitter: `tarunnagpal78`,
    },
  },
  plugins: [
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-embed-gist",
    //         options: {
    //           // Optional:
     
    //           // the github handler whose gists are to be accessed
    //           username: 'tarun-nagpal-github',
     
    //           // a flag indicating whether the github default gist css should be included or not
    //           // default: true
    //           includeDefaultCss: true
    //         }
    //       }
    //     ]
    //   }
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-snippet`,
            options: {},
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options : {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
// Updated the TrackingId
