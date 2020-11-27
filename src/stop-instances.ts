import { RDS } from 'aws-sdk';
import { Handler } from 'aws-lambda';

interface InstanceIdsMap {
  [region: string]: string[];
}

const INSTANCE_IDS: InstanceIdsMap = {
  'us-east-2': ['cybersecurity-messenger'],
};

export const lambdaHandler: Handler = (_event, _ctx) => {
  Object.keys(INSTANCE_IDS).forEach((region) => {
    const rds = new RDS({ region });

    INSTANCE_IDS[region].forEach((instanceId) => {
      rds.stopDBInstance(
        {
          DBInstanceIdentifier: instanceId,
        },
        (err, data) => {
          if (err) {
            console.error(`Failed to stop instance ${instanceId}:`, err);
          } else {
            console.log(`Successfully stopped instance ${instanceId}:`, data);
          }
        }
      );
    });
  });
};
