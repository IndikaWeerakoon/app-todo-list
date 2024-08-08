import { Request } from "express";

export class Logger {
    private requestPath: string | undefined;
    private requestMethod: string | undefined ;
    private contextPath = process.env.CONTEXT_PATH || '/api';

    public set request(req: Request) {
        this.requestPath = req?.path;
        this.requestMethod = req?.method;   
    }

    public log(message: string, option?: any): void {
        console.log(new Date(), `(path: [${this.requestMethod}] ${this.contextPath}${this.requestPath})`, `[Log]: ${message}`, option || '');
    }

    public error(message: string, option: any): void {
        console.error(new Date(), `(path: [${this.requestMethod}] ${this.contextPath}${this.requestPath})`,`[Error]: ${message}`, option || '');
    }
}