interface HeaderItemProps {
  title: string;
  value: string;
}

function HeaderItem({ title, value }: HeaderItemProps) {
  return (
    <div className="flex flex-col items-center gap-2 leading-tight sm:leading-normal sm:gap-4">
      <dt className="font-bold">{title}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export { HeaderItem };
