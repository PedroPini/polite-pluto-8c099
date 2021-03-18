require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `TourAz`,
        description: `Somos uma empresa de tour virtual, virtualização e criação de ambientes em 360`,
        author: `Pedro Pini`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts-with-attributes`,
            options: {
              fonts: [
                `material icons`,  
                `Roboto\:400,700`,  
                `Rubik\:400,700`
              ],
              display: 'swap',
              attributes: {
                rel: "stylesheet preload prefetch",
              },
            }
        },
        "gatsby-plugin-postcss",
        `gatsby-plugin-preact`,
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-resolve-src",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Touraz`,
                short_name: `touraz`,
                start_url: `/`,
                background_color: `#EFF9F0`,
                theme_color: `#2E3532`,
                display: `minimal-ui`,
                icon: `src/assets/images/favicon.png`,
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          },
          `@contentful/gatsby-transformer-contentful-richtext`,
    ],
};
