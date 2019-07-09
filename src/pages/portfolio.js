import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SkipLinkContents from "../components/skip-link-contents"
import { SkipNavLink } from "@reach/skip-nav"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Page two" />
    <main>
      <SkipNavLink id="portfolioSkipLink" aria-labelledby="portfolioHeading portfolioSkipLink">
        <SkipLinkContents />
      </SkipNavLink>
      <h1 id="portfolioHeading">Hi from the portfolio page</h1>
    </main>
  </Layout>
)

export default PortfolioPage
