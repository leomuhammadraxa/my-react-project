const paymentDetailsCardData = {
  stepper: [
    { label: "Select plan", done: true },
    { label: "Enter details", done: true },
    { label: "Review", done: true },
    { label: "Done", current: true, number: "4" },
  ],

  title: "Payment Details",

  paymentRows: [
    { label: "Premium:", value: "Rs.45,000" },
    { label: "Premium discount:", value: "(Rs.0)" },
    { label: "Promo discount:", value: "(Rs.0)" },
  ],

  promoButtonText: "Have a promo code? Click here.",

  total: {
    label: "Payment:",
    value: "Rs.45,000",
  },

  cardPayment: {
    title: "Pay by credit / debit card",
    subtitle: "Make sure online shopping is enabled on debit card",
    buttonText: "Pay Online",
    secureText: "Secure credit card payment system",
    visaText: "VISA",
  },

  bankTransfer: {
    buttonText: "Pay via bank or wire transfer",
  },

  actions: {
    backText: "Back",
  },
};

export default paymentDetailsCardData;