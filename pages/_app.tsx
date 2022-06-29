import React from "react"
import type { AppProps } from 'next/app'
import { globalStyles } from "../libs/stitches/stitches.global"

function App({ Component, pageProps }: AppProps) {
  /* Load @stitches/dev global styles */
  globalStyles();

  return <Component {...pageProps} />
}

export default App 
