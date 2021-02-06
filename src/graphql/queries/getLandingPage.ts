const GET_LANDING_PAGE = /* GraphQl */ `
  fragment imageData on UploadFile {
    alternativeText
    url
  }  

  fragment logo on LandingPage {
      logo {
        ...imageData
      }
    }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        ...imageData
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject{
      title
      description
      media{
        alternativeText
        url
      }
      
    }
  }

  fragment sectionTech on LandingPage{
    sectionTech{
      title
      techIcons{
        title
        icon{
          alternativeText
          url
        }
      }
    }
  }

  query get_landing_page {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
    }
  }
`
export default GET_LANDING_PAGE
