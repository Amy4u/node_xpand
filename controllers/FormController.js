
const getForm = (req, res) => {
    const pageData = {
        pageTitle: 'XPAND | General'
    }
    res.render('general', pageData)
}

module.exports = {
    getForm
}