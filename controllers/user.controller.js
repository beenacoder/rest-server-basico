

const usersGet = (req, res) => {
    const { q, nombre, apikey} = req.query;
    res.json({
        msg:"GET api - controlador",
        q,
        nombre,
        apikey
    })
}

const usersPost =(req, res) => {
    // const body = req.body;
    const {nombre, edad} = req.body
    res.json({
        msg:"POST api - controlador",
        nombre, 
        edad
    })
}

const usersPut = (req, res) => {
    //const id = req.params.id;
    const {id} = req.params;

    res.json({
        msg:"PUT api - controlador",
        id
    })
}

const usersPatch = (req, res) => {
    res.json({
        msg:"PATCH api - controlador"
    })
}

const usersDelete = (req, res) => {
    res.json({
        msg:"DELETE api -controlador"
    })
}






module.exports = {
    usersGet, usersPut, usersPost,usersPatch, usersDelete
}