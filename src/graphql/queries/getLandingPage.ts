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

  fragment sectionConcept on LandingPage{
    sectionConcept{
      title
      concepts{
        title
      }
    }
  }

  fragment sectionModules on LandingPage{
    sectionModules{
      title
      modules{
        title
        subTitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage{
    sectionAgenda{
      title
      description
    }
  }

  fragment pricingBox on LandingPage{
    pricingBox{
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button{
        label
        url
      }
    }
  }


  fragment sectionAboutUs on LandingPage{
    sectionAboutUs{      
      title
      authors{
        photo{
          alternativeText
          url
        }
        name
        role
        socialLinks{
          title
          url
        }
        description
      }
      
    }
  }

  fragment sectionReviews on LandingPage{
    sectionReviews{
      title
      reviews{
        name
        text
        photo{
          alternativeText
          url
        }
      }
    }
  }

  fragment sectionFaq on LandingPage{
    sectionFaq{
      title
      question{
        question
        answer
      }
    }
  }

  query get_landing_page {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcept
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFaq
    }
  }
`
export default GET_LANDING_PAGE
