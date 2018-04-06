import * as express from 'express';
import * as path from 'path';

export const commonMiddlewares: any = [express.static(path.resolve('../../', 'public'))];
export const routes: any = {
    get: {
        "/api/tracks/month": path.resolve(__dirname, './handlers/getMonthTracks/index.ts'),
        "/api/tracks/year": path.resolve(__dirname, './handlers/getYearTracks/index.ts'),
        "/api/categories": path.resolve(__dirname, './handlers/getUserCategories/index.ts')
    },
    put: {
        "/api/track/income": {
            handler: path.resolve(__dirname, './handlers/putIncomeTrack/index.ts'),
            middlewares: [express.json()]
        },
        "/api/track/cost": {
            handler: path.resolve(__dirname, './handlers/putCostTrack/index.ts'),
            middlewares: [express.json()]
        }
    }
};