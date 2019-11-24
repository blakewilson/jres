document.addEventListener('click', function(e) {
    var headers = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']

    if(!headers.includes(e.target.nodeName)) {
        return null
    }

    window.location.hash = e.target.id
})