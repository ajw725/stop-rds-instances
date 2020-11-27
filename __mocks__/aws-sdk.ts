export const stopFn = jest.fn();

export class RDS {
  stopDBInstance = stopFn;
}
