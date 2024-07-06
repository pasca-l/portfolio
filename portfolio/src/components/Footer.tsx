export default function Footer({
  accountName,
  authorName,
}: {
  accountName: string;
  authorName: string;
}) {
  return (
    <>
      <div className="px-10 pb-10 pt-16 text-center text-xs text-gray-500">
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
