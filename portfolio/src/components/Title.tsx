export default function Title({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="pb-3 mb-4 border-b border-gray-300">
        <h1 className="text-3xl break-words mb-2">{title}</h1>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </>
  );
}
