import "./title.scss";

interface TitleProps {
  title: string;
}
export default function Title({ title }: TitleProps) {
  return (
    <>
      <span className="title">{title}</span>
    </>
  );
}
