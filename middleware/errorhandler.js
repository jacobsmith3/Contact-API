<<<<<<< HEAD
const {constants} = require("../constants");

const errorHandler = (err, req,res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({title: "Not Found",
                 message: err.message,
                  stackTrace: err.stack
                });
            break;
        case constants.VALIDATION:
            res.json({title: "Validation Failed",
                 message: err.message,
                  stackTrace: err.stack
                });
        case constants.UNAUTHORIZED:
            res.json({title: "Unauthorized",
                 message: err.message,
                  stackTrace: err.stack
                });
            break;
        case constants.FORBIDDEN:
            res.json({title: "Forbidden",
                 message: err.message,
                  stackTrace: err.stack
                });
        case constants.SERVER_ERROR:
            res.json({title: "Server error",
                 message: err.message,
                  stackTrace: err.stack
                });
        default:
            console.log("No error, all good!");
            break;
    }
};

=======
const {constants} = require("../constants");

const errorHandler = (err, req,res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({title: "Not Found",
                 message: err.message,
                  stackTrace: err.stack
                });
            break;
        case constants.VALIDATION:
            res.json({title: "Validation Failed",
                 message: err.message,
                  stackTrace: err.stack
                });
        case constants.UNAUTHORIZED:
            res.json({title: "Unauthorized",
                 message: err.message,
                  stackTrace: err.stack
                });
            break;
        case constants.FORBIDDEN:
            res.json({title: "Forbidden",
                 message: err.message,
                  stackTrace: err.stack
                });
        case constants.SERVER_ERROR:
            res.json({title: "Server error",
                 message: err.message,
                  stackTrace: err.stack
                });
        default:
            console.log("No error, all good!");
            break;
    }
};

>>>>>>> cdf2ca0 (initial Commit)
module.exports = errorHandler;