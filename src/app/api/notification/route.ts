import prisma from "../../../config/prisma.config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { time_ranges = [], ...rest } = await request.json();
  try {
    const result = await prisma.notificationConfiguration.create({
      data: {
        ...rest,
        time_ranges: { createMany: { ...time_ranges } },
      },
      include: { time_ranges: true },
    });
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected Error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
