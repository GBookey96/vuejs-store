import { RouteNotFoundErrorModel } from "../4-models/error-model.js";

function routeNotFound(request, response, next) {
    const err = new RouteNotFoundErrorModel(request.originalUrl);
    next(err);
}

export default routeNotFound;
