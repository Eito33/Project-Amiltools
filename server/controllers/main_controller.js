module.exports = {

    validFunction(result, res, response, error){
        if(result === true){
            res.status(200).json(
                {
                    "result": true,
                    response
                }
            )
        }else{
            res.status(400).json(
                {
                    "result": false,
                    error
                }
            )
        }
    }

}
