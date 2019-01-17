import { AdminIndexModule } from './admin-index.module';

describe('AdminIndexModule', () => {
  let adminIndexModule: AdminIndexModule;

  beforeEach(() => {
    adminIndexModule = new AdminIndexModule();
  });

  it('should create an instance', () => {
    expect(adminIndexModule).toBeTruthy();
  });
});
