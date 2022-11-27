import { subDays, subHours, subMinutes, subSeconds } from "date-fns";

const now = new Date();

class OrderApi {
  getOrders() {
    const customers = [
      {
        id: "5e887ac47eed253091be10cb",
        avatar:
          "https://shop.thesourcebulkfoods.com.au/wp-content/uploads/sites/3/2021/04/Coffee-beans.jpg",
        city: "Cleveland",
        country: "USA",
        currency: "$",
        email: "carson.darrin@devias.io",
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: true,
        name: "Carson Darrin",
        state: 0,
        totalAmountSpent: 300.0,
        totalOrders: 3,
        updatedAt: subDays(subHours(now, 7), 1).getTime(),
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        avatar: "/mystatic/mock-images/avatars/avatar-fran_perez.png",
        city: "Atlanta",
        country: "USA",
        currency: "$",
        email: "fran.perez@devias.io",
        hasAcceptedMarketing: true,
        isProspect: true,
        isReturning: false,
        name: "Fran Perez",
        state: 0,
        totalAmountSpent: 0.0,
        totalOrders: 0,
        updatedAt: subDays(subHours(now, 1), 2).getTime(),
      },
      {
        id: "5e887b7602bdbc4dbb234b27",
        avatar: "/mystatic/mock-images/avatars/avatar-jie_yan_song.png",
        city: "North Canton",
        country: "USA",
        currency: "$",
        email: "jie.yan.song@devias.io",
        hasAcceptedMarketing: false,
        isProspect: false,
        isReturning: false,
        name: "Jie Yan Song",
        state: 0,
        totalAmountSpent: 5600.0,
        totalOrders: 6,
        updatedAt: subDays(subHours(now, 4), 2).getTime(),
      },
      {
        id: "5e86809283e28b96d2d38537",
        avatar: "/mystatic/mock-images/avatars/avatar-anika_visser.png",
        city: "Madrid",
        country: "Spain",
        currency: "$",
        email: "anika.visser@devias.io",
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: true,
        name: "Anika Visser",
        state: 0,
        totalAmountSpent: 500.0,
        totalOrders: 1,
        updatedAt: subDays(subHours(now, 11), 2).getTime(),
      },
      {
        id: "5e86805e2bafd54f66cc95c3",
        avatar: "/mystatic/mock-images/avatars/avatar-miron_vitold.png",
        city: "San Diego",
        country: "USA",
        currency: "$",
        email: "miron.vitold@devias.io",
        hasAcceptedMarketing: true,
        isProspect: true,
        isReturning: false,
        name: "Miron Vitold",
        totalAmountSpent: 0.0,
        totalOrders: 0,
        state: 0,
        updatedAt: subDays(subHours(now, 7), 3).getTime(),
      },
      {
        id: "5e887a1fbefd7938eea9c981",
        avatar: "/mystatic/mock-images/avatars/avatar-penjani_inyene.png",
        city: "Berkeley",
        country: "USA",
        currency: "$",
        email: "penjani.inyene@devias.io",
        hasAcceptedMarketing: false,
        isProspect: true,
        isReturning: false,
        name: "Penjani Inyene",
        state: 0,
        totalAmountSpent: 0.0,
        totalOrders: 0,
        updatedAt: subDays(subHours(now, 5), 4).getTime(),
      },
      {
        id: "5e887d0b3d090c1b8f162003",
        avatar: "/mystatic/mock-images/avatars/avatar-omar_darboe.png",
        currency: "$",
        email: "omar.darobe@devias.io",
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: false,
        city: "Carson City",
        country: "USA",
        name: "Omar Darobe",
        state: 0,
        totalAmountSpent: 100.0,
        totalOrders: 4,
        updatedAt: subDays(subHours(now, 15), 4).getTime(),
      },
      {
        id: "5e88792be2d4cfb4bf0971d9",
        avatar: "/static/mock-images/avatars/avatar-siegbert_gottfried.png",
        city: "Los Angeles",
        country: "USA",
        currency: "$",
        email: "siegbert.gottfried@devias.io",
        hasAcceptedMarketing: true,
        isProspect: false,
        isReturning: true,
        name: "Siegbert Gottfried",
        state: 0,
        totalAmountSpent: 1000.0,
        totalOrders: 2,
        updatedAt: subDays(subHours(now, 2), 5).getTime(),
      },
      {
        id: "5e8877da9a65442b11551975",
        avatar: "/static/mock-images/avatars/avatar-iulia_albu.png",
        city: "Murray",
        country: "USA",
        email: "iulia.albu@devias.io",
        hasAcceptedMarketing: true,
        isProspect: true,
        isReturning: false,
        name: "Iulia Albu",
        state: 0,
        totalAmountSpent: 0.0,
        totalOrders: 0,
        updatedAt: subDays(subHours(now, 8), 6).getTime(),
      },
      {
        id: "5e8680e60cba5019c5ca6fda",
        avatar: "/static/mock-images/avatars/avatar-nasimiyu_danai.png",
        city: "Salt Lake City",
        country: "USA",
        currency: "$",
        email: "nasimiyu.danai@devias.io",
        hasAcceptedMarketing: false,
        isProspect: false,
        isReturning: true,
        name: "Nasimiyu Danai",
        state: 0,
        totalAmountSpent: 200.0,
        totalOrders: 7,
        updatedAt: subDays(subHours(now, 1), 9).getTime(),
      },
    ];

    return Promise.resolve(customers);
  }

  insertOrder() {
    const customer = {
      id: "5e86805e2bafd54f66cc95c3",
      address1: "Street John Wick, no. 7",
      address2: "House #25",
      avatar: "/static/mock-images/avatars/avatar-miron_vitold.png",
      balance: 0,
      city: "San Diego",
      country: "USA",
      currency: "$",
      email: "miron.vitold@devias.io",
      hasDiscount: false,
      isVerified: true,
      name: "Miron Vitold",
      phone: "+55 748 327 439",
      state: 0,
      vatRate: 19,
      zipCode: "240355",
    };

    return Promise.resolve(customer);
  }

  getCustomerEmails() {
    const emails = [
      {
        id: "5ece2ce3613486d95ffaea58",
        createdAt: subDays(subHours(subMinutes(now, 34), 5), 3).getTime(),
        description: "Order confirmation",
      },
      {
        id: "5ece2ce8cebf7ad1d100c0cd",
        createdAt: subDays(subHours(subMinutes(now, 49), 11), 4).getTime(),
        description: "Order confirmation",
      },
    ];

    return Promise.resolve(emails);
  }

  getCustomerInvoices() {
    const invoices = [
      {
        id: "528651571NT",
        issueDate: now.getTime(),
        status: "paid",
        amount: 1358.75,
      },
      {
        id: "311658671JR",
        issueDate: now.getTime(),
        status: "unpaid",
        amount: 1451.75,
      },
    ];

    return Promise.resolve(invoices);
  }

  getCustomerLogs() {
    const logs = [
      {
        id: "5ece2cfeb6e2ac847bba11ce",
        createdAt: subDays(subMinutes(subSeconds(now, 56), 2), 2).getTime(),
        description: "Purchase",
        ip: "84.234.243.42",
        method: "POST",
        route: "/api/purchase",
        status: 200,
      },
      {
        id: "5ece2d02510484b2952e1e05",
        createdAt: subDays(subMinutes(subSeconds(now, 56), 2), 2).getTime(),
        description: "Purchase",
        ip: "84.234.243.42",
        method: "POST",
        route: "/api/purchase",
        status: 522,
      },
      {
        id: "5ece2d08e2748e4e9788901a",
        createdAt: subDays(subMinutes(subSeconds(now, 23), 8), 2).getTime(),
        description: "Cart remove",
        ip: "84.234.243.42",
        method: "DELETE",
        route: "/api/products/d65654e/remove",
        status: 200,
      },
      {
        id: "5ece2d0c47214e342c2d7f28",
        createdAt: subDays(subMinutes(subSeconds(now, 54), 20), 2).getTime(),
        description: "Cart add",
        ip: "84.234.243.42",
        method: "GET",
        route: "/api/products/d65654e/add",
        status: 200,
      },
      {
        id: "5ece2d11e4060a97b2b57623",
        createdAt: subDays(subMinutes(subSeconds(now, 16), 34), 2).getTime(),
        description: "Cart add",
        ip: "84.234.243.42",
        method: "GET",
        route: "/api/products/c85727f/add",
        status: 200,
      },
      {
        id: "5ece2d16cf6d53d8e33656af",
        createdAt: subDays(subMinutes(subSeconds(now, 30), 54), 2).getTime(),
        description: "View product",
        ip: "84.234.243.42",
        method: "GET",
        route: "/api/products/c85727f",
        status: 200,
      },
      {
        id: "5ece2d1b2ec5071be9286a96",
        createdAt: subDays(subMinutes(subSeconds(now, 40), 56), 2).getTime(),
        description: "Get products",
        ip: "84.234.243.42",
        method: "GET",
        route: "/api/products",
        status: 200,
      },
      {
        id: "5ece2d22e68d5498917e47bc",
        createdAt: subDays(subMinutes(subSeconds(now, 5), 57), 2).getTime(),
        description: "Login",
        ip: "84.234.243.42",
        method: "POST",
        route: "/api/authentication/login",
        status: 200,
      },
    ];

    return Promise.resolve(logs);
  }
}

export const orderApi = new OrderApi();
