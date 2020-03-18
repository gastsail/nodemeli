var mercadopago = require('../../../index');

exports.run = function (req, res) {

  let preference = {
    items: [{
      id: "1234",
      title: "Celular Xiaomi Redmi Note 7",
      currency_id: "ARS",
      picture_url: "https://cnet1.cbsistatic.com/img/jerqdm92TwXKKfPjnNpO0gIK5VE=/868x488/2019/08/14/71b1ffaf-a502-42c4-94d5-2bb3da0444fe/samsung-galaxy-a20-1.jpg",
      description: "Dispositivo móvil de Tienda e-commerce",
      category_id: "phones",
      quantity: 1,
      unit_price: 10000
    }],
    payer: {
      name: "Lalo",
      surname: "Landa",
      email: "test_user_63274574@testuser.com",

      phone: {
        area_code: "011",
        number: 22223333
      },

      identification: {
        type: "DNI",
        number: "22333444"
      },

      address: {
        street_name: "Falsa",
        street_number: 123,
        zip_code: "1111"
      },
      back_urls: {
        success: "https://www.tu-sitio/success",
        failure: "http://www.tu-sitio/failure",
        pending: "http://www.tu-sitio/pending"
      },
      auto_return: "approved",
      payment_methods: {
        excluded_payment_methods: [{
          id: "amex"
        }],
        excluded_payment_types: [{
          id: "atm"
        }],
        installments: 6,
      },
    },

    external_reference: "ABCD1234"
  };

  mercadopago.preferences.create(preference).then(function (data) {
    res.render('checkout-buttons/basic-preference/button', {
      preference: data
    });
  }).catch(function (error) {
    res.render('500', {
      error: error
    });
  });
};
