import { answerInvite } from "@/api/invite";
import { InputInviteDto } from "@/api/invite.dto";
import { NextRequest, NextResponse } from "next/server";
interface RequestParams {
  params: {
    inviteId: string;
  };
}
export async function PATCH(req: NextRequest, requestParams: RequestParams) {
  try {
    const { inviteId } = requestParams?.params;

    if (!inviteId) throw new Error("Convite não encontrado");

    const body: Omit<InputInviteDto, "id"> = await req.json();

    await answerInvite({
      id: inviteId,
      answer: body.answer,
    });

    return NextResponse.json({ message: "Convite atualizado com sucesso." });
  } catch (error) {
    throw new Error("Falha ao tentar atualizar convite");
  }
}
