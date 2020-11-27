import { lambdaHandler } from '../src/stop-instances';
import { stopFn } from '../__mocks__/aws-sdk';

const handlerCtx = {
  callbackWaitsForEmptyEventLoop: false,
  functionName: 'none',
  functionVersion: '1',
  invokedFunctionArn: 'whatever',
  memoryLimitInMB: '128',
  awsRequestId: 'whatever',
  logGroupName: 'whatever',
  logStreamName: 'whatever',
  getRemainingTimeInMillis: () => 1,
  done: () => true,
  fail: () => false,
  succeed: () => true,
};

const handlerCb = jest.fn();

describe('Stopping RDS instances', () => {
  it('calls stopDBInstance', () => {
    lambdaHandler({}, handlerCtx, handlerCb);
    expect(stopFn).toHaveBeenCalledTimes(1);
  });
});
