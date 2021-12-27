import BaseWallet from "../BaseWallet";

export default abstract class InjectedWallet extends BaseWallet {
  protected injectedGlobal: string;

  constructor(id: string, name: string, description: string, icon: string, injectedGlobal: string) {
    super(id, name, description, icon);

    this.injectedGlobal = injectedGlobal;
  }

  async init(): Promise<void> {
    return new Promise((resolve) => {
      (window.onload as any) = resolve;
    });
  }
}
