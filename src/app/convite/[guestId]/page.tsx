"use client";
import nomesImg from "@/assets/nomes.png";
import { Button } from "@/components/Button";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [invitedPerson, setInvitedPerson] = useState<Guest>();

  const { guestId } = props?.params || {};

  useEffect(() => {
    // getGuestById(guestId);
  }, []);

  async function getGuestById(id: string) {
    if (!id) return;
    setLoading(true);
    try {
      console.log("vai chamar");
      const response = await axios.get(`/api/invite/${id}`);
      console.log("Setando setInvitedPerson", response.data);
      setInvitedPerson(response.data);
      console.log("deu o set");
    } catch (error) {
      console.log("error", error);
      setInvitedPerson(undefined);
      throw error;
    } finally {
      console.log("ta no finally");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <Image src={nomesImg} alt="Imagem escrito Rafael e Lívia" />

      {loading ? (
        <p>Buscando informações do convite</p>
      ) : (
        <p className="text-center">{renderGuestMessage(invitedPerson)}</p>
      )}

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
