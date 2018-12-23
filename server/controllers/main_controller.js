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
            res.status(404).json(
                {
                    "result": false,
                    error
                }
            )
        }
    }

}
