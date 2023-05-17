import nomesImg from "@/assets/nomes.png";
import { Button } from "@/components/Button";
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

async function getGuestInformation(guestId: string): Promise<Guest> {
  const convidados = [
    {
      id: "aa",
      name: "Gil",
      guests: "Luciana, Daniel e Raul",
      guestsQuantity: 3,
      answered: false,
    },
    {
      id: "bb",
      name: "Osvaldo",
      guests: "Lane",
      guestsQuantity: 1,
      answered: false,
    },
  ];

  return new Promise((resolve, reject) => {
    const [guest] = convidados.filter((g) => g.id === guestId);

    if (!guest || !guest?.id) {
      return reject(new Error("Convite não encontrado."));
    }

    setTimeout(() => resolve(guest), 2000);
  });
}

export default async function Welcome({ params }: Params) {
  const { guestId } = params;

  const invitedPerson = await getGuestInformation(guestId);

  if (invitedPerson.answered) {
    return <h1>Já respondido</h1>;
  }

  return (
    <div className="flex flex-col items-center">
      <Image src={nomesImg} alt="Imagem escrito Rafael e Lívia" />

      <p className="text-center">{renderGuestMessage(invitedPerson)}</p>

      <div>
        <p>FOTO DO CONVITE GRANDE ou SÓ INFO</p>
      </div>

      <div>Você poderá responder até {new Date().getTime()}</div>

      <Button color="bg-blue-100">
        <Link href="/confirmar">Responder agora</Link>
      </Button>
    </div>
  );
}
