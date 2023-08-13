export class ErrorModel {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }
}

export class RouteNotFoundErrorModel extends ErrorModel {
    constructor(route) {
        super(`Route ${route} does not exist`, 404);
    }
}

export class ResourceNotFoundErrorModel extends ErrorModel {
    constructor(id) {
        super(`id ${id} cannot be found`, 404);
    }
}

export class ValidationErrorModel extends ErrorModel {
    constructor(message) {
        super(message, 400);
    }
}

export class UnauthorizedErrorModel extends ErrorModel {
    constructor(message) {
        super(message, 401);
    }
}


