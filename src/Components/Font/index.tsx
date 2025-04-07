import "./font.scss";

interface FontProps {
  text: string;
}

export default function Font({ text }: FontProps) {
  return (
    <>
      <span className="font-nails">{text}</span>
    </>
  );
}
