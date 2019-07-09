import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SkipLinkContents from "../components/skip-link-contents"
import { SkipNavLink } from "@reach/skip-nav"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <main>
      <SkipNavLink id="aboutSkipLink" aria-labelledby="aboutHeading aboutSkipLink">
        <SkipLinkContents />
      </SkipNavLink>
      <h1 id="aboutHeading">Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>
)

export default SecondPage
