import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const Html = ({ htmlAttributes, ...props }) => {
  const renderedChildren = renderToStaticMarkup(<Root {...props} />)

  return (
    <html
      {...htmlAttributes}
      dangerouslySetInnerHTML={{
        __html: `
<!---------------------------------------------
Looks like someone got a little curious hehe
It's alright I do it all the time :)

Anyways...feel free poke around, 
just take off your shoes before you come in please
----------------------------------------------->
				${renderedChildren}
			`,
      }}
    />
  )
}

// this is the default component html.js that Gatsby uses
const Root = ({
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </>
)

export default Html