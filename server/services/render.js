const axios = require('axios')

exports.homeRoutes = ((req, res) => {
    axios.get('http://localhost:5000/api/user')
        .then((response) => {

            res.render('index', {
                users: response.data
            })
        })
})
exports.adduser = ((req, res) => {
    res.render('add_user.ejs')
})
exports.updateuser = ((req, res) => {
    axios.get('http://localhost:5000/api/user', {params:{ id: req.query.id } })
        .then((userdata) => {
            console.log(userdata.data)
            res.render('update_user', {user: userdata.data})
        })
        .catch(err => {
            console.log(err)
        })
    // res.render('update_user.ejs') 
})