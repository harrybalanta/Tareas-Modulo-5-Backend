
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Acceso denegado. Token no proporcionado o formato incorrecto.' });
    }

    const token = authHeader.split(' ')[1]; 

    if (token !== 'mysecrettoken') {
        return res.status(403).json({ message: 'Acceso denegado. Token inválido.' });
    }

    next(); 
};

export default authMiddleware;
