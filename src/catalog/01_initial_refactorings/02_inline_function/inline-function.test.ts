import {
  Customer,
  createInvoice as exercise,
  Invoice,
  Order,
} from './exercise.ts';
import { createInvoice as solution } from './solution.ts';

type FunctionToTest = (
  customer: Customer,
  orders: Order[]
) => Invoice | undefined;

const tests = (functionToTest: FunctionToTest) => {
  const mockDate = new Date('2024-05-30');
  const mockDateString = mockDate.toDateString();

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should create an invoice with the correct structure', () => {
    const customer = {
      customerId: 'C12345',
      name: 'John Doe',
      address: {
        street: '123 Main St',
        zip: '12345',
        city: 'Anytown',
        country: 'USA',
      },
    };

    const orders = [
      {
        articleId: 'A1',
        articleName: 'Widget',
        quantity: 2,
        price: 10,
      },
      {
        articleId: 'A2',
        articleName: 'Gadget',
        quantity: 1,
        price: 15,
      },
    ];

    const invoice = functionToTest(customer, orders);

    expect(invoice).toEqual({
      customerId: 'C12345',
      name: 'John Doe',
      address: '123 Main St,\n12345,\nAnytown,\nUSA',
      orders: [
        {
          articleId: 'A1',
          articleName: 'Widget',
          quantity: 2,
          price: 10,
          total: 20,
        },
        {
          articleId: 'A2',
          articleName: 'Gadget',
          quantity: 1,
          price: 15,
          total: 15,
        },
      ],
      total: 35,
      createdAt: mockDateString,
    });
  });

  it('should handle empty orders array', () => {
    const customer = {
      customerId: 'C12345',
      name: 'John Doe',
      address: {
        street: '123 Main St',
        zip: '12345',
        city: 'Anytown',
        country: 'USA',
      },
    };

    const invoice = functionToTest(customer, []);

    expect(invoice).toBeUndefined();
  });
};

describe('extract function - exercise', () => tests(exercise));

describe('extract function - solution ', () => tests(solution));
