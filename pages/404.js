import Link from "../src/components/Link";

export default function Page404() {
  return (
    <div>
      <h1>Parece que você se perdeu!</h1>
      <Link href="/">
        <a>Voltar para a página inicial</a>
      </Link>
    </div>
  );
}
