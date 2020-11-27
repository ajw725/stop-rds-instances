"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
const aws_sdk_1 = require("aws-sdk");
const INSTANCE_IDS = {
    'us-east-2': ['cybersecurity-messenger'],
};
const lambdaHandler = (_event, _ctx) => {
    Object.keys(INSTANCE_IDS).forEach((region) => {
        const rds = new aws_sdk_1.RDS({ region });
        INSTANCE_IDS[region].forEach((instanceId) => {
            rds.stopDBInstance({
                DBInstanceIdentifier: instanceId,
            }, (err, data) => {
                if (err) {
                    console.error(`Failed to stop instance ${instanceId}:`, err);
                }
                else {
                    console.log(`Successfully stopped instance ${instanceId}:`, data);
                }
            });
        });
    });
};
exports.lambdaHandler = lambdaHandler;
