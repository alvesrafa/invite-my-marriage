import nomesImg from "@/assets/nomes.png";
import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image src={nomesImg} alt="Imagem escrito Rafael e Lívia" />

      <Button color="bg-blue-200">
        <Link href="/bem-vindo/aa">Teste</Link>
      </Button>
    </div>
  );
}
