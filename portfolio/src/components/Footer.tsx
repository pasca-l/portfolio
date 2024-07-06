export default function Footer({
  accountName,
  authorName,
}: {
  accountName: string;
  authorName: string;
}) {
  return (
    <>
      <div className="pt-16 pb-10 px-10 text-xs text-center text-gray-500">
        Copyright © 2024, Developed by{" "}
        <a
          className="hover:underline"
          href={`https://github.com/${accountName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {authorName}
        </a>
      </div>
    </>
  );
}
