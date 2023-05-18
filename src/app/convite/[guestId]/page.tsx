"use client";
import nomesImg from "@/assets/nomes.png";
import { Button } from "@/components/Button";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { renderGuestMessage } from "./utils";

export interface Guest {
  id: string;
  name: string;
  guests?: string;
  guestsQuantity: number;
  answered: boolean;
}

export default async function Invite({ params }: Params) {
  const { guestId } = params;
  const [invitedPerson, setInvitedPerson] = useState<Guest>({
    id: "a",
    answered: false,
    guestsQuantity: 2,
    name: "asdas",
    guests: "1231",
  });
  async function getGuestById(id: string) {
    try {
      console.log("vai tentar chamar", id);
      const response = await axios.get(`/api/invite/${id}`);
      console.log("response", response.data);
      // setInvitedPerson(response.data);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }

  useEffect(() => {
    if (!guestId) {
      return redirect("/");
    }
    getGuestById(guestId);
  }, [guestId]);

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
