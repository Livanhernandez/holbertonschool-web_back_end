import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this.amount = amount;
    } else {
      throw new Error('amount must be a number');
    }

    if (currency instanceof Currency) {
      this.currency = currency;
    } else {
      throw new Error('currency must be an instance of Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number') {
      if (typeof conversionRate === 'number') {
        return amount * conversionRate;
      }
      throw new Error('amount must be a number');
    } else {
      throw new Error('conversionRate must be a number');
    }
  }
}
