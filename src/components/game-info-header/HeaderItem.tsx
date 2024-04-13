interface HeaderItemProps {
  title: string;
  value: string;
  valueClassName?: string;
}

function HeaderItem({ title, value, valueClassName }: HeaderItemProps) {
  return (
    <div className="flex flex-col items-center gap-2 leading-tight sm:leading-normal sm:gap-4">
      <dt className="font-bold">{title}</dt>
      <dd className={valueClassName}>{value}</dd>
    </div>
  );
}

export { HeaderItem };
