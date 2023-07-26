import CustomError from '../models/customError.js';

/**
 * Custom error handler to standardize error objects returned to
 * the client
 */
function handleError(
    err,
    req,
    res,
    next
) {
    let customError = err;

    if (!(err instanceof CustomError)) {
        customError = new CustomError(
            'Oh no, this is embarrasing. We are having troubles my friend'
        );
    }

    // we are not using the next function to prvent from triggering
    // the default error-handler. However, make sure you are sending a
    // response to client to prevent memory leaks in case you decide to
    // NOT use, like in this example, the NextFunction .i.e., next(new Error())
    res.status(customError.status).send(customError);
};

export default handleError;