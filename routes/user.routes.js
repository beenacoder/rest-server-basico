const {Router} = require('express');
const { usersGet, usersPut, usersPost, usersPatch, usersDelete } = require('../controllers/user.controller');

const router = Router();


router.get('/', usersGet) //No llamamos la funcion usersGet, simplemente mandamos la referencia. Al llamar la funcion get se pasan los dos argumentos
router.post('/', usersPost)
router.put('/:id', usersPut)
router.patch('/', usersPatch)
router.delete('/', usersDelete)




module.exports = router;