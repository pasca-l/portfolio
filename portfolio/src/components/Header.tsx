import Image from "next/image";

export default function Header() {
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
        <div className="flex-auto content-center text-sm">
          pasca-l / portfolio
        </div>
        <div className="flex-initial content-center text-sm">Header End</div>
      </div>
    </>
  );
}
