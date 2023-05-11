import { Button } from "@/components/Button";
import Link from "next/link";

interface Guest {
  name: string;
  guests?: string;
  guestsQuantity: number;
  answered: boolean;
}

export default function Home() {
  const invitedPerson = {
    name: "Gil",
    guests: "Luciana, Daniel e Raul",
    guestsQuantity: 3,
    answered: false,
  };

  const invitedPerson2 = {
    name: "Osvaldo",
    guests: "Lane",
    guestsQuantity: 1,
    answered: false,
  };

  function renderGuestMessage(guest: Guest) {
    if (guest.guestsQuantity === 1) {
      return `Você e ${guest.guests} estão convidados(as) para o nosso casamento!`;
    } else if (guest.guestsQuantity > 1) {
      return `Você, ${guest.guests} estão convidados(as) para o nosso casamento!`;
    } else {
      return `Você está convidado(a) para o nosso casamento!`;
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1>Rafael e Lívia</h1>
      <p className="text-center">{renderGuestMessage(invitedPerson)}</p>

      <div>
        <p>FOTO DO CONVITE GRANDE ou SÓ INFO</p>
      </div>

      <div>Você poderá responder até {new Date().getTime()}</div>

      <Button color="bg-blue-400">
        <Link href="/confirmar">Responder agora</Link>
      </Button>
    </div>
  );
}
