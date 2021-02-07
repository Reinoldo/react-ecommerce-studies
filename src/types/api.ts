export type LogoProps = Image

export type Image = {
  alternativeText: string
  url: string
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Concept = {
  title: string
}

export type Module = {
  title: string
  subTitle: string
  description: string
}

export type Author = {
  name: string
  role: string
  photo: Image
  description: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptProps = {
  title: string
  concepts: Concept[]
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  name: string
  text: string
  photo: Image
}
export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}
export type SectionFaqProps = {
  title: string
  question: Question[]
}
export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcept: SectionConceptProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
