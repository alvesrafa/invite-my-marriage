"use client";
import nomesImg from "@/assets/nomes.png";
import { Button } from "@/components/Button";
import { Loading } from "@/components/Loading";
import { marriageDate, maxDateToAccept } from "@/constants/dates";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

export default function Invite(props: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [invitedPerson, setInvitedPerson] = useState<Guest>();

  const { guestId } = props?.params || {};

  useEffect(() => {
    getGuestById(guestId);
  }, []);

  async function getGuestById(id: string) {
    if (!id) return;
    setLoading(true);
    try {
      const response = await axios.get(`/api/invite/${id}`);
      setInvitedPerson(response.data);
    } catch (error) {
      router.push("/convite");
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <Image src={nomesImg} alt="Imagem escrito Rafael e Lívia" />

      {loading ? (
        <Loading />
      ) : (
        <>
          <p className="text-center">{renderGuestMessage(invitedPerson)}</p>
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
            >
              Responder agora
            </Link>
          </Button>
        </>
      )}
    </div>
  );
}
