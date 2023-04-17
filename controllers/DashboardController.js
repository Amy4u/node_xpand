
const getDashboard = (req, res) => {
    const pageData = {
        pageTitle: 'XPAND | Dashboard'
    }
    res.render('dashboard', pageData)
}

module.exports = {
    getDashboard
}