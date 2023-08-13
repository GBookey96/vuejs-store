class AppConfig {

    constructor() {
        // Initialise database 
        this.host = "localhost";
        this.user = "root";
        this.password = "";
        this.database = "mystore";
        
        // Initialise server
        this.port = 3001;
    }
}

const appConfig = new AppConfig();

export default appConfig;
