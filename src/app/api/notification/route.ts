import prisma from "../../../config/prisma.config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { timeRanges, ...rest } = await request.json(); // 👈
  try {
    const result = await prisma.notificationConfiguration.create({
      data: {
        ...rest,
        timeRanges: {
          createMany: {
            ...timeRanges,
          },
        },
      },
      include: {
        timeRanges: true,
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected Error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
