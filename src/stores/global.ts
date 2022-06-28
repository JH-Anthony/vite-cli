import { makeAutoObservable } from "mobx";
class GlobalStore {
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  count = 0;
  setCount(count: number) {
    console.log(count);
    this.count = count;
  }

  get getTotalCount() {
    let total = this.count * 2;
    return total;
  }
}

export default new GlobalStore();
