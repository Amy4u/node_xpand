
const getLogin = (req, res) => {
    const pageData = {
        pageTitle: 'XPAND | Login'
    }
    res.render('login', pageData)
}

module.exports = {
    getLogin
}