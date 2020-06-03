import React from 'react'
import markdown from '../README.md'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import Heading from '../components/heading'
import Code from '../components/code'

const Home = () => {
    const googleAnalyticsId = 'UA-132058143-7'

    return(
        <>
            <Head>
                <title>The Jres Specification</title>

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/atom-one-dark.min.css" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="The Jres specification establishes how to format JSON RESTful API responses." />

                <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>

                <script dangerouslySetInnerHTML={{__html: `
                    window.dataLayer = window.dataLayer || [];

                    function gtag() {
                        dataLayer.push(arguments);
                    }

                    gtag('js', new Date());

                    gtag('config', '${googleAnalyticsId}');
                `}} />
            </Head>

            <ReactMarkdown
                source={markdown}
                escapeHtml={false}
                renderers={{
                    heading: Heading,
                    code: Code
                }} />

            <style jsx global>{`
                html {
                    box-sizing: border-box;
                }
                
                *, *:before, *:after {
                    box-sizing: inherit;
                }
                
                body {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                    font-size: 1.2rem;
                    max-width: 48rem;
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 1.5;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    color: #2a2a2a;
                }
                
                img {
                    border: 0;
                    max-width: 100%;
                }
                
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    color: #000;
                }
                
                a {
                    color: #000;
                    text-decoration: none;
                    border-bottom: 3px solid #3F51B5;
                }
                
                pre {
                    padding: 1rem;
                    color: #abb2bf;
                    background: #282c34;
                    overflow: auto;
                    border-radius: 5px;
                }
                
                table {
                    display: block;
                    width: 100%;
                    overflow: auto;
                    border-spacing: 0;
                    border-collapse: collapse;
                }
                
                table tr {
                    background-color: transparent;
                    border-top: 1px solid #c6cbd1;
                }
                
                table td,
                table th {
                    padding: 6px 13px;
                    border: 1px solid #dfe2e5;
                }
                
                :not(pre) > code {
                    padding: .2em .4em;
                    margin: 0;
                    font-size: 85%;
                    background-color: rgba(27,31,35,.05);
                    border-radius: 3px;
                }
                
                blockquote {
                    border-left: 5px solid rgba(27,31,35,.05);
                    margin-left: 0;
                }
                
                blockquote p {
                    margin-left: 1rem;
                }
                
                @media (prefers-color-scheme: dark) {
                    body {
                        background-color: #2a2a2a;
                        color: #ccc;
                    }
                
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        color: #fff;
                    }
                
                    table td,
                    table th {
                        border-color: #444;
                    }
                
                    hr {
                        border-color: #444;
                    }
                
                    pre {
                        background-color: #1f1f1f;
                    }
                
                    :not(pre) > code {
                        background-color: #000;
                    }
                
                    a {
                        color: #fff;
                    }
                
                    blockquote {
                        border-left-color: #1f1f1f;
                    }
                }
            `}</style>
        </>
    )
}

export default Home