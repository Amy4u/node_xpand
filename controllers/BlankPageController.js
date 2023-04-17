
const getBlankPage = (req, res) => {
    const pageData = {
        pageTitle: 'XPAND | Blank Page'
    }
    res.render('blank_page', pageData)
}

module.exports = {
    getBlankPage
}