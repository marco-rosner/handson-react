import React, { StrictMode } from 'react';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

export const render = (url: string) => {
    return ReactDOMServer.renderToString(
        <StrictMode>
            <StaticRouter location={url}>
            </StaticRouter>
        </StrictMode>
    )
}