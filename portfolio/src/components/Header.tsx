import Image from "next/image";

export default function Header({
  accountName,
  repositoryName,
}: {
  accountName: string;
  repositoryName: string;
}) {
  return (
    <>
      <div className="flex gap-3 border-b border-gray-300 bg-gray-100 p-4">
        <Image
          src="/identicon.svg"
          alt="GitHub Identicon"
          width={32}
          height={32}
          priority
        />
        <div className="content-end text-sm">feat.</div>
        <Image
          src="/github-mark.svg"
          alt="GitHub Logo"
          width={32}
          height={32}
          priority
        />
        <div className="flex-auto content-center text-sm">
          <a
            className="rounded p-1.5 hover:bg-gray-200"
            href={`https://github.com/${accountName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {accountName}
          </a>
          /
          <a
            className="rounded p-1.5 font-medium hover:bg-gray-200"
            href={`https://github.com/${accountName}/${repositoryName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repositoryName}
          </a>
        </div>
        <div className="flex-initial content-center text-sm">Header End</div>
      </div>
    </>
  );
}
