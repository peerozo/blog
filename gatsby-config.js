module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Peerozo Blog`,
    siteUrl: `https://peerozo.com`,
    description: ``,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "Home",
            url: "/",
          },
          {
            title: "About Us",
            url: "/about",
          },
          {
            title: "FAQs",
            url: "/faqs",
          },
        ],
      },
      footer: {
        copyright: "peerozo.com",
        columns: [
          {
            heading: "Find us in",
            links: [
              {
                title: "Ranchi",
              },
              {
                title: "Kolkata",
              },
              {
                title: "New Delhi",
              },
              {
                title: "Bangalore",
              },
            ],
          },
          {
            heading: "Peerozo",
            links: [
              {
                title: "About Us",
                url: "/about",
              },
              {
                title: "Privacy Policy",
                url: "/privacy",
              },
              {
                title: "FAQs",
                url: "/faqs",
              },
            ],
          },
          {
            heading: "Follow us",
            links: [
              {
                title: "Facebook",
                url: "https://facebook.com/peerozo",
              },
              {
                title: "Twitter",
                url: "https://twitter.com/peerozo",
              },
              {
                title: "Instagram",
                url: "https://instagram.com/peerozo",
              },
              {
                title: "LinkedIn",
                url: "https://linkedin.com/company/peerozo",
              },
            ],
          },
        ],
      },
    },
    templates: {
      home: {
        totalPosts: 3,
        template: "home",
      },
      pages: {
        path: "/content/pages/",
        template: "page",
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefix: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6,
            },
          },
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6,
        },
      },
    },
  },
  plugins: [
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sky Lite`,
        short_name: `SkyLite`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
