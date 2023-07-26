class CustomError {
    error;
    status;
    additionalInfo;

    constructor(error, status = 500, additionalInfo = {}) {
        this.error = error;
        this.status = status;
        this.additionalInfo = additionalInfo
    }
}

export default CustomError