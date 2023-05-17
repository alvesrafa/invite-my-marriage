import { Guest } from "./page";

export function renderGuestMessage(guest: Guest) {
  if (guest.guestsQuantity === 1) {
    return `Você e ${guest.guests} estão convidados(as) para o nosso casamento!`;
  } else if (guest.guestsQuantity > 1) {
    return `Você, ${guest.guests} estão convidados(as) para o nosso casamento!`;
  } else {
    return `Você está convidado(a) para o nosso casamento!`;
  }
}
