
const getProfile = (req, res) => {
    const pageData = {
        pageTitle: 'XPAND | Profile'
    }
    res.render('profile', pageData)
}

module.exports = {
    getProfile
}