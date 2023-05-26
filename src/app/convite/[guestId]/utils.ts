import { Invite } from "@prisma/client";

export function renderGuestMessage(guest?: Invite) {
  if (!guest) return "";

  if (guest.quantity === 1) {
    return `Você e ${guest.guests} estão convidados(as) para o nosso casamento!`;
  } else if (guest.quantity > 1) {
    return `Você, ${guest.guests} estão convidados(as) para o nosso casamento!`;
  } else {
    return `Você está convidado(a) para o nosso casamento!`;
  }
}
