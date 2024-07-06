export default function Title({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="mb-4 border-b border-gray-300 pb-3">
        <h1 className="mb-2 break-words text-3xl">{title}</h1>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </>
  );
}
