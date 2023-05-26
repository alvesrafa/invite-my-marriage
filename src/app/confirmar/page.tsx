"use client";
import { Button } from "@/components/Button";
import { useState } from "react";
import { ActionButtons } from "./actionButtons";

interface Props {
  params: any;
  searchParams: { guestId: string };
}

export default function ConfirmationPage({ searchParams }: Props) {
  const { guestId } = searchParams || {};
  const [step, setStep] = useState(0);

  function onClickKeepGoing() {
    setStep((prevStep) => prevStep + 1);
  }

  switch (step) {
    case 0:
      return (
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">
            Essa confirmação é extremamente necessária para confirmarmos os
            nomes na lista.
          </p>
          <p>🚨🚨Sem o nomes da lista, não entrará.🚨🚨</p>
          <Button color="bg-blue-100" onClick={onClickKeepGoing}>
            Continuar
          </Button>
        </div>
      );

    case 1:
      return (
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">
            Ao clicar no botão você está confirmando que irá para a nossa
            cerimônia.
          </p>
          <ActionButtons guestId={guestId} />
        </div>
      );

    default:
      return null;
  }
}
