import { defaultHandler } from "ra-data-simple-prisma";
import { prisma } from "../../prisma/client"; // 

export default function handler(req, res) {
  defaultHandler(req, res, prisma);
}