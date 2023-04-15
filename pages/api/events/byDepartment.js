import { prisma } from '@/prisma/client';

export default async function (req, res) {
  const { departmentId, page, limit } = req.params;
  try {
    const events = await prisma.event.findMany({
      where: {
        departmentId: departmentId ? departmentId : '',
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        name: true,
        slug: true,
        poster: true,
        date: true,
        registrationFee: true,
        department: {
          select: {
            name: true,
          },
        },
      },
      take: limit,
      skip: page * limit,
    });
    const hasMore = !(events.length < limit);
    return res.json({ events, nextPage: hasMore });
  } catch (e) {
    return res.json({ error: e });
  }
}
