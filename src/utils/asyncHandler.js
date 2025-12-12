

export const asyncHandler=(fun)=>async(req,res,next)=>{
    try {
        await fun(req, res, next)
    } catch (error) {
    return res.status(500).json({
            success:false,
            message:error.message
        })
    }

}