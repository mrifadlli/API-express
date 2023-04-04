exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello User FSD</h1>');
};

exports.helloGuys = (req, res, next) => {
    console.log('ini request :>>', req.query);
    res.send({
        response : req.model
    })
}