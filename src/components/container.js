import React from "react"
import containerStyles from "../styles/components/container.module.scss"

export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)