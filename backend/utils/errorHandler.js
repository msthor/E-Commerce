class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        // Captures the stack trace, excluding constructor call from it
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;
