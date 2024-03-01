import offers from "./offers.data.js";

function getOffers(req, res) {
  setTimeout(() => res.status(200).json(offers), 3000);
}

export { getOffers };
