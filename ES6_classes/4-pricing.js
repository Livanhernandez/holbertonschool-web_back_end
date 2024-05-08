import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this.amount = amount;
    } else {
      throw new Error('Amount should be a number');
    }

    if (currency instanceof Currency) {
      this.currency = currency;
    } else {
      throw new Error('Currency should be an instance of Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number') {
      if (typeof conversionRate === 'number') {
        return amount * conversionRate;
      }

      throw new Error('Conversion rate should be a number');
    } else {
      throw new Error('Amount should be a number');
    }
  }
}
