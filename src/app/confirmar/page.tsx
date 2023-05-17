"use client";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ConfirmationPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  function toConfirm() {
    // Tratar no banco a pessoa
    router.push("/confirmado");
  }

  function toDeny() {
    // Tratar no banco a pessoa
    router.push("/negado");
  }
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
          <div className="flex flex-col lg:flex-row lg:justify-around lg:p-4">
            <Button color="bg-blue-100" onClick={toConfirm}>
              Vou, com certeza! 😍
            </Button>
            <Button color="bg-red-400" onClick={toDeny}>
              Não vou conseguir 😢
            </Button>
          </div>
        </div>
      );

    default:
      return null;
  }
}
