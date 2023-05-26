import { find } from "@/api/invite";
import nomesImg from "@/assets/nomes.png";
import { Button } from "@/components/Button";
import { marriageDate, maxDateToAccept } from "@/constants/dates";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import { renderGuestMessage } from "./utils";

export interface Guest {
  id: string;
  name: string;
  guests?: string;
  guestsQuantity: number;
  answered: boolean;
}
interface Props {
  params: Params;
}

export default async function Invite(props: Props) {
  const { guestId } = props?.params || {};

  const inviteInfo = await find(guestId);

  return (
    <div className="flex flex-col items-center">
      <Image src={nomesImg} alt="Imagem escrito Rafael e Lívia" />

      <div className="text-center">
        <p>Olá, {inviteInfo.name}</p>
        <p className="text-center">{renderGuestMessage(inviteInfo)}</p>
      </div>

      <div className="my-8">
        <p className="text-center">
          O evento acontecerá no dia{" "}
          {new Intl.DateTimeFormat("pt-BR").format(marriageDate)}
        </p>
        <p className="text-center">No piuva</p>
        <p className="text-center">Entrada a partir das 16h até às 17h</p>
      </div>

      <p className="text-xs">
        Você poderá responder até{" "}
        {new Intl.DateTimeFormat("pt-BR").format(maxDateToAccept)}
      </p>

      <Button color="bg-blue-100">
        <Link
          href={{
            pathname: "/confirmar",
            query: { guestId },
          }}
          className="text-black text-normal"
        >
          Responder agora
        </Link>
      </Button>
    </div>
  );
}
