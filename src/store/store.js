import { Subject } from "rxjs";

class Store {
  _boolean = true;
  _booleanSubject = new Subject();

  _count = 0;
  _countSubject = new Subject();

  ///////////////////////////////////////////////
  get boolean() {
    return this._boolean;
  }
  set boolean(value) {
    this._boolean = value;
    this._booleanSubject.next(value);
  }
  get booleanSubject() {
    return this._booleanSubject;
  }
  setNewBoolean = (value) => {
    this._boolean = value;
    this._booleanSubject.next(this._boolean);
  };
  /////////////////////////////////////////////

  get count() {
    return this._count;
  }
  get countSubject() {
    return this._countSubject;
  }
  set count(value) {
    this._count = value;
    this._countSubject.next(value);
  }
  setPlusCount = (value) => {
    this._count = this._count + value;
    this._countSubject.next(this._count);
  };
  setMinusCount = (value) => {
    this._count = this._count - value;
    this._countSubject.next(this._count);
  };
  /////////////////////////////////////
}

export const store = new Store();
window["store"] = Store;
