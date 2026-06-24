const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-4">{children}</div>;
};

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function CardImage({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  return <img className="w-full" src={src} alt={alt} title={title} />;
}

function CardBody({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Image = CardImage;
Card.Footer = CardFooter;

export default Card;
