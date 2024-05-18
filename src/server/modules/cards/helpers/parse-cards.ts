import { readdir, readFile } from "fs/promises";
import { resolve } from "path";
import { CardSet } from "../types/cards.types";

export const getSetCardsFromJson = (jsonCard: string): CardSet => {
  const cardSet = JSON.parse(jsonCard);

  return cardSet;
};

export const parseCardSetFiles = async (): Promise<CardSet[]> => {
  const path = resolve(process.cwd(), "assets", "cards");
  const files = await readdir(path);

  const cardsSetsPromises = files.map(async (file) => {
    const jsonFile = await readFile(resolve(path, file), "utf-8");

    return getSetCardsFromJson(jsonFile);
  });

  const cardsSets = await Promise.all(cardsSetsPromises);

  return cardsSets;
};
