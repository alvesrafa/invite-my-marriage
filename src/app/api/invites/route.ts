import { findAll } from "@/server/invite";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page"));
    const size = Number(searchParams.get("size"));
    const answered = searchParams.get("answered") === "false" ? false : true;

    const [invites, total] = await findAll({
      page: page || 1,
      size: size || 6,
      answered,
    });

    return NextResponse.json({ invites, total });
  } catch (error) {
    throw new Error("Falha ao buscar convites");
  }
}
