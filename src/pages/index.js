import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import SkipLinkContents from "../components/skip-link-contents"
import { SkipNavLink } from "@reach/skip-nav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SkipNavLink id="homeSkipLink" aria-labelledby="homeHeading homeSkipLink">
      <SkipLinkContents />
    </SkipNavLink>
    <h1 id="homeHeading">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h2>To do:</h2>
    <ul>
      <li>Test Reach again in Safari/VO and NVDA/Firefox</li>
      <li>Skip nav needs:
        <ul>
          <li>Default CSS and wrapper recommendations</li>
          <li>A hook between global nav and the skip link. How to hook into Gatsby routing? How to handle more than one?</li>
          <li>An automatic label (with optional prop) indicating the section it's in and what it does</li>
        </ul>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
