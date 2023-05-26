import { Button } from "@/components/Button";

export default function Login() {
  async function signIn() {}

  return (
    <form className="p-4 rounded-lg">
      <fieldset className="m-4 flex flex-col">
        <label htmlFor="username" className="mb-1 font-bold">
          Username:
        </label>
        <input name="username" className="rounded-md p-2" />
      </fieldset>
      <fieldset className="m-4 flex flex-col">
        <label htmlFor="password" className="mb-1 font-bold">
          Senha:
        </label>
        <input name="password" type="password" className="rounded-md p-2" />
      </fieldset>

      <Button color="bg-yellow" type="submit">
        Acessar
      </Button>
    </form>
  );
}
