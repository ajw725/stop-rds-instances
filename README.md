# RDS Shutoff Lambda

AWS SAM project to stop RDS instance(s) on a schedule.

## Development

1. Modify code
1. `yarn test`: run tests with jest
1. `yarn build`: compile typescript
1. `sam build`
1. (optional) `sam local invoke -e events/event-cloudwatch-event.json StopRDSInstances`.
   - WARNING: this will actually run the code in the function and will affect real AWS resources.
   - NOTE: it will assume the role linked to the AWS credentials you are using to run the SAM commands rather than the role assigned in the SAM template.
1. `sam deploy`: if this is your first time deploying, or if you need to change the settings, run `sam deploy --guided`.
