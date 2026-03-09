async function registerController(req,res,next) {
    //! it will give client side responce  
    // throw new Error(" something went wrong    ");
    //proble with us it alws return html format 
    //we want json 

    try {
        return res.status(200).json({
            message:'sucess'
        })
    } catch (error) {
        error.status=401

        next(error)
    }
    
    
}
export default registerController