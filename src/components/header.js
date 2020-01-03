import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

import { Box, Image, Flex, Link } from "rebass"
import Logo from "../images/logo.svg"
import Container from "./container"

const menus = [
  { label: "Meetups", path: "/meetups" },
  { label: "Blog", path: "/blog" },
  { label: "Jobs", path: "/jobs" },
]

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    css={css`
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
    `}
  >
    <Container>
      <Flex color="white" justifyContent="space-between" py={1}>
        <GatsbyLink
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image src={Logo} alt={siteTitle} width="12.5rem" />
        </GatsbyLink>
        <Box>
          {menus.map(menu => (
            <Link key={menu.label} variant="nav" href={menu.path}>
              {menu.label}
            </Link>
          ))}
        </Box>
      </Flex>
    </Container>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
