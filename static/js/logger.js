class Logger {
    constructor() {
        this.logs = [];
    }

    log(message, level = 'INFO') {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${level}] ${message}`;
        this.logs.push(logMessage);
        console.log(logMessage);
    }

    error(message) {
        this.log(message, 'ERROR');
    }

    warn(message) {
        this.log(message, 'WARN');
    }

    info(message) {
        this.log(message, 'INFO');
    }

    debug(message) {
        this.log(message, 'DEBUG');
    }

    getLogs() {
        return this.logs;
    }
}

// Example usage:
const logger = new Logger();

// Log different levels of messages
logger.info('Application started');
logger.debug('Debugging application');
logger.warn('This is a warning message');
logger.error('An error occurred');

// Get all logs
console.log(logger.getLogs());

export default logger;

