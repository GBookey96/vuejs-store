// import logger from "../2-utils/logger.js";
import appConfig from "../2-utils/app-config.js";

function catchAll(err, request, response, next) {
    const status = err.status || 500;

    if (status === 500) {
        // logger.logError("catchAll error", err);
    }

    const message = appConfig.isDevelopment || status !== 500 ? err.message : "Some error occurred, please try again";

    response.status(status).send(message);
}

export default catchAll;
