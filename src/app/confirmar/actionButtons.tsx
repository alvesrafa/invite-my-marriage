import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

interface Props {
  guestId: string;
}

export function ActionButtons({ guestId }: Props) {
  const router = useRouter();

  async function toConfirm(guestId: string) {
    try {
      await fetch(`/api/invite/answer/${guestId}`, {
        method: "PATCH",
        body: JSON.stringify({ answer: "yes" }),
      });
      router.push("/confirmado");
    } catch (error) {}
  }

  async function toDeny(guestId: string) {
    try {
      await fetch(`/api/invite/answer/${guestId}`, {
        method: "PATCH",
        body: JSON.stringify({ answer: "no" }),
      });

      router.push("/negado");
    } catch (error) {}
  }

  return (
    <div className="flex flex-col lg:flex-row lg:justify-around lg:p-4">
      <Button color="bg-blue-100" onClick={() => toConfirm(guestId)}>
        Vou, com certeza! 😍
      </Button>
      <Button color="bg-red-400" onClick={() => toDeny(guestId)}>
        Não vou conseguir 😢
      </Button>
    </div>
  );
}
