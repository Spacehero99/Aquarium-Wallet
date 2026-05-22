export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export class Logger {
  static debug(message: string, data?: any) {
    this.log(LogLevel.DEBUG, message, data);
  }

  static info(message: string, data?: any) {
    this.log(LogLevel.INFO, message, data);
  }

  static warn(message: string, data?: any) {
    this.log(LogLevel.WARN, message, data);
  }

  static error(message: string, error?: Error, data?: any) {
    this.log(LogLevel.ERROR, message, { error, ...data });
  }

  private static log(level: LogLevel, message: string, data?: any) {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level}]`;
    console.log(`${prefix} ${message}`, data || '');
  }
}