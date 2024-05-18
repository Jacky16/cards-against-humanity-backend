import { parseCardSetFiles } from "../../modules/cards/helpers/parse-cards.js";

const CardResolvers = {
  Query: {
    cardSets() {
      return parseCardSetFiles();
    },
  },
};

export default CardResolvers;
