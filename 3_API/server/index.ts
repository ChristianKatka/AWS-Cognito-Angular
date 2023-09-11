import * as awsServerlessExpress from "aws-serverless-express";

import { app } from './app'

const serverless = (app) => (event, ctx) => {
    awsServerlessExpress.proxy(
        awsServerlessExpress.createServer(app.callback()),
        event,
        ctx
    );
};

const handler = serverless(app);

export { handler };