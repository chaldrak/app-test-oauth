import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("exaku");
      }}
    >
      <button
        type="submit"
        className="bg-red-500 p-4 rounded-md hover:shadow-sm"
      >
        Signin with Exaku
      </button>
    </form>
  );
}
