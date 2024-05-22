import { parseCardSetFiles } from "../../modules/cards/helpers/parse-cards.js";
import { QueryResolvers } from "../generate/resolver-types.types";

const queries: QueryResolvers = {
  cardSets: async () => {
    return parseCardSetFiles();
  },
};

export default queries;
