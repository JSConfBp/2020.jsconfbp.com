
module.exports = {
  siteMetadata: {
    siteUrl: 'https://jsconfbp.com',
    title: 'JSConf Budapest 2022',
    description: 'JSConf Budapest 2022, June 2-3, Budapest, Hungary. Tickets from €205, including free workshops, inclusive catering and barista coffee!',
    keywords: 'jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest, diversity, inclusivity, community',
    twitter: '@jsconfbp'
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "updates",
        path: `${__dirname}/updates`,
        ignore: [
          `**/*.jpg`,
          `**/*.svg`,
          `**/*.gif`,
          `**/*.jpeg`,
          `**/*.webp`,
          `**/*.png`,
          `**/*.js`,
          `**/*.mp4`,
          `**/*.m4v`,
        ],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "speakers",
        path: `${__dirname}/speakers`,
        ignore: [
          `**/*.jpg`,
          `**/*.svg`,
          `**/*.gif`,
          `**/*.jpeg`,
          `**/*.webp`,
          `**/*.png`,
          `**/*.js`,
          `**/*.mp4`,
          `**/*.m4v`,
        ],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mc",
        path: `${__dirname}/mc`,
        ignore: [
          `**/*.jpg`,
          `**/*.svg`,
          `**/*.gif`,
          `**/*.jpeg`,
          `**/*.webp`,
          `**/*.png`,
          `**/*.js`,
          `**/*.mp4`,
          `**/*.m4v`,
        ],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "workshops",
        path: `${__dirname}/workshops`,
        ignore: [
          `**/*.jpg`,
          `**/*.svg`,
          `**/*.gif`,
          `**/*.jpeg`,
          `**/*.webp`,
          `**/*.png`,
          `**/*.js`,
          `**/*.mp4`,
          `**/*.m4v`,
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'postimages',
        path: `${__dirname}/updates`,
        ignore: [
          `**/*.mdx`,
          `**/*.js`,
          `**/*.mp4`,
          `**/*.m4v`,
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'speakerimages',
        path: `${__dirname}/speakers`,
        ignore: [
          `**/*.mdx`,
          `**/*.js`,
          `**/*.mp4`,
          `**/*.m4v`,
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mcimages',
        path: `${__dirname}/mc`,
        ignore: [
          `**/*.mdx`,
          `**/*.js`,
          `**/*.mp4`,
          `**/*.m4v`,
        ],
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`sponsor-images`,
        path: `${__dirname}/static/sponsors`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`sponsor-gallery`,
        path: `${__dirname}/static/past-sponsors`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`team-pics`,
        path: `${__dirname}/static/team`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name: `images`,
        path: `${__dirname}/src/images`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-react-helmet',

    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jsconf-budapest',
        short_name: 'jsconfbp',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-58489830-1",
      },
    },
  ],
}
