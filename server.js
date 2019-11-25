const express = require('express')
const marked = require('marked')
const fs = require('fs')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    const pathToReadme = __dirname + '/README.md'
    const file = fs.readFileSync(pathToReadme, 'utf8')

    marked.setOptions({
        highlight: function(code) {
            return require('highlight.js').highlightAuto(code).value
        }
    })

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>The Jres Specification</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/atom-one-dark.min.css">
        <link rel="icon" href="/favicon.ico">
        <meta name="description" content="The Jres specification establishes how to format JSON RESTful API responses."
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-132058143-7"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-132058143-7');
        </script>
    </head>
    <body>
        ${marked(file.toString())}
        <script src="global.js"></script>
    </body>
    </html>
    `)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}`)
})