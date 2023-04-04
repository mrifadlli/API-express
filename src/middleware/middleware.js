exports.myMiddleware = (req,res,next) => {
    req.model = `yeyyeyeye`
    next()
}