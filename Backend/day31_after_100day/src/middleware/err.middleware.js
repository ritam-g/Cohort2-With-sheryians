async function handelErr(err,req,res,next) {
    console.log(err.message);
    res.status(err.status).json({
        stack:err.stack,
        message:err.message
    })
    
}

export default handelErr