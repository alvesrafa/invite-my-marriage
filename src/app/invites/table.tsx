"use client";

import { Button } from "@/components/Button";
import { usePagination } from "@/hooks/usePagination";
import { Invite } from "@prisma/client";
import { useEffect, useState } from "react";

interface Props {}

export function InviteTable({}: Props) {
  const [invites, setInvites] = useState<Invite[]>([]);
  const pageSize = 6;
  const { getMorePage, hasMore, currentPage } = usePagination({
    pageSize,
  });
  const [loading, setLoading] = useState(true);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    getInvites(1);
  }, [answered]);

  function toggleAnswer() {
    setAnswered((prev) => !prev);
  }

  function copy(id: string) {
    navigator.clipboard.writeText(`/convite/${id}`);
  }

  async function getInvites(page: number) {
    try {
      setLoading(true);

      const response = await fetch(
        `/api/invites?page=${page}&size=${pageSize}&answered=${answered}`
      );

      const { invites: newInvites, total } = await response.json();

      const totalPages = Math.round(Math.ceil(total / pageSize));

      setInvites(newInvites);
      getMorePage(page, totalPages);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={answered}
          onChange={() => toggleAnswer()}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Respondidos?
        </span>
      </label>
      {invites.length > 0 ? (
        <table className="w-full table-fixed">
          <thead>
            <tr>
              <th className="text-left">Nome</th>
              <th className="text-left">Qnt.</th>
              <th className="text-left">Vai?</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {invites.map((invite) => (
              <tr key={invite.id}>
                <td>{invite.name}</td>
                <td>{invite.quantity}</td>
                <td>
                  {!invite?.answer
                    ? "---"
                    : invite?.answer === "yes"
                    ? "Sim"
                    : "Não"}
                </td>
                <td>
                  <Button color="bg-yellow" onClick={() => copy(invite.id)}>
                    Copiar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>{loading ? "Carregando" : "Sem convites"}</p>
      )}
      <div className="flex justify-center align-center">
        {currentPage > 1 && (
          <Button color="bg-red" onClick={() => getInvites(currentPage - 1)}>
            Voltar
          </Button>
        )}
        {hasMore && (
          <Button color="bg-red" onClick={() => getInvites(currentPage + 1)}>
            Próxima
          </Button>
        )}
      </div>
    </div>
  );
}
