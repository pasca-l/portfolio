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
      <div className="flex p-4 gap-3 bg-gray-100 border-b border-gray-300">
        <a>
          <Image
            src="/github-mark.svg"
            alt="GitHub Logo"
            width={32}
            height={32}
            priority
          />
        </a>
        <Image
          src={`https://github.com/identicons/${accountName}.png`}
          alt="GitHub Logo"
          width={32}
          height={32}
          priority
        />
        <div className="flex-auto content-center text-sm">
          <a
            className="p-1.5 rounded hover:bg-gray-200"
            href={`https://github.com/${accountName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {accountName}
          </a>
          /
          <a
            className="font-medium p-1.5 rounded hover:bg-gray-200"
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
