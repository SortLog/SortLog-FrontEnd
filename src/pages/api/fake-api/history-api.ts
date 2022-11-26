import { addDays, subDays, subHours } from "date-fns";

const now = new Date();

class HistoryApi {
  getHistories() {
    const histories = [
      {
        id: "5ecb868d0f437390ef3ac61c",
        trackingNumber: "Inbound-001",
        status: "Done",
        Date: subHours(now, 1).getTime(),
        totalQTY: 110,
        items: [
          {
            SKU: "a00001",
            name: "Apple",
            price: 5,
            QTY: 100,
          },
          {
            SKU: "a00099",
            name: "Computer",
            price: 5000,
            QTY: 10,
          },
        ],
        user: {
          companyName: "Example Pty Ltd",
          email: "11111@sortlog.com",
          name: "TOM JACKY",
        },
      },
      {
        id: "5ecb868d0f437390ef3ac62c",
        trackingNumber: "Inbound-002",
        status: "Done",
        Date: subHours(now, 1).getTime(),
        totalQTY: 110,
        items: [
          {
            SKU: "a00002",
            name: "Apple",
            price: 5,
            QTY: 100,
          },
          {
            SKU: "a00099",
            name: "Computer",
            price: 5000,
            QTY: 10,
          },
        ],
        user: {
          companyName: "Example Pty Ltd",
          email: "11111@sortlog.com",
          name: "TOM JACKY",
        },
      },
      {
        id: "5ecb868d0f437390ef3ac63c",
        trackingNumber: "Inbound-003",
        status: "Done",
        Date: subHours(now, 1).getTime(),
        totalQTY: 110,
        items: [
          {
            SKU: "a00003",
            name: "Apple",
            price: 5,
            QTY: 100,
          },
          {
            SKU: "a00099",
            name: "Computer",
            price: 5000,
            QTY: 10,
          },
        ],
        user: {
          companyName: "Example Pty Ltd",
          email: "11111@sortlog.com",
          name: "TOM JACKY",
        },
      },
      {
        id: "5ecb868d0f437390ef3ac64c",
        trackingNumber: "Inbound-004",
        status: "Done",
        Date: subHours(now, 1).getTime(),
        totalQTY: 110,
        items: [
          {
            SKU: "a00004",
            name: "Apple",
            price: 5,
            QTY: 100,
          },
          {
            SKU: "a00099",
            name: "Computer",
            price: 5000,
            QTY: 10,
          },
        ],
        user: {
          companyName: "Example Pty Ltd",
          email: "11111@sortlog.com",
          name: "TOM JACKY",
        },
      },
      {
        id: "5ecb868d0f437390ef3ac65c",
        trackingNumber: "Inbound-005",
        status: "Done",
        Date: subHours(now, 1).getTime(),
        totalQTY: 110,
        items: [
          {
            SKU: "a00005",
            name: "Apple",
            price: 5,
            QTY: 100,
          },
          {
            SKU: "a00099",
            name: "Computer",
            price: 5000,
            QTY: 10,
          },
        ],
        user: {
          companyName: "Example Pty Ltd",
          email: "11111@sortlog.com",
          name: "TOM JACKY",
        },
      },
      {
        id: "5ecb868d0f437390ef3ac66c",
        trackingNumber: "Inbound-006",
        status: "Done",
        Date: subHours(now, 1).getTime(),
        totalQTY: 110,
        items: [
          {
            SKU: "a00006",
            name: "Apple",
            price: 5,
            QTY: 100,
          },
          {
            SKU: "a00099",
            name: "Computer",
            price: 5000,
            QTY: 10,
          },
        ],
        user: {
          companyName: "Example Pty Ltd",
          email: "11111@sortlog.com",
          name: "TOM JACKY",
        },
      },
      {
        id: "5ecb868d0f437390ef3ac67c",
        trackingNumber: "Inbound-007",
        status: "Done",
        Date: subHours(now, 1).getTime(),
        totalQTY: 110,
        items: [
          {
            SKU: "a00007",
            name: "Apple",
            price: 5,
            QTY: 100,
          },
          {
            SKU: "a00099",
            name: "Computer",
            price: 5000,
            QTY: 10,
          },
        ],
        user: {
          companyName: "Example Pty Ltd",
          email: "11111@sortlog.com",
          name: "TOM JACKY",
        },
      },
      {
        id: "5ecb868d0f437390ef3ac68c",
        trackingNumber: "Inbound-008",
        status: "Done",
        Date: subHours(now, 1).getTime(),
        totalQTY: 110,
        items: [
          {
            SKU: "a00008",
            name: "Apple",
            price: 5,
            QTY: 100,
          },
          {
            SKU: "a00099",
            name: "Computer",
            price: 5000,
            QTY: 10,
          },
        ],
        user: {
          companyName: "Example Pty Ltd",
          email: "11111@sortlog.com",
          name: "TOM JACKY",
        },
      },
    ];

    return Promise.resolve(histories);
  }

  getHistory() {
    const history = {
      id: "5ecb868d0f437390ef3ac62c",
      trackingNumber: "Inbound-001",
      status: "Done",
      Date: subHours(now, 1).getTime(),
      totalQTY: 110,
      items: [
        {
          SKU: "a00001",
          name: "Apple",
          price: 5,
          QTY: 100,
        },
        {
          SKU: "a00088",
          name: "Bread",
          price: 6,
          QTY: 100,
        },
        {
          SKU: "a00077",
          name: "Ball",
          price: 7,
          QTY: 100,
        },
        {
          SKU: "a00099",
          name: "Computer",
          price: 5000,
          QTY: 1,
        },
        {
          SKU: "a00299",
          name: "Car",
          price: 50000,
          QTY: 10,
        },
        {
          SKU: "a00199",
          name: "Pen",
          price: 1,
          QTY: 10,
        },
      ],
      user: {
        companyName: "Example Pty Ltd",
        email: "11111@sortlog.com",
        name: "TOM JACKY",
      },
    };

    return Promise.resolve(history);
  }
}

export const historyApi = new HistoryApi();