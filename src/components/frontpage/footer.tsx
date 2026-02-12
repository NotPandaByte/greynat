export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/60 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center text-zinc-500">
        <p className="mb-4">
          <span className="font-mono">greynat</span> is an open-source security scanner for the{" "}
          <a className="text-emerald-400" href="https://www.greynoise.io/" target="_blank" rel="noreferrer">
            GreyNoise
          </a>{" "}
          API. It is designed to be used in a web application, but can also be run as a standalone CLI tool.
        </p>
        <p className="mb-4">
          <span className="font-mono">greynat</span> is developed by{" "}
          <a className="text-emerald-400" href="https://github.com/bunzed" target="_blank" rel="noreferrer">
            bunzed
          </a>
          .
        </p>
        <p className="mb-4">
          <span className="font-mono">greynat</span> is licensed under the{" "}
          <a className="text-emerald-400" href="https://github.com/bunzed/greynat/blob/main/LICENSE" target="_blank" rel="noreferrer">
            MIT License
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
