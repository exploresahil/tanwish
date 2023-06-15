import Link from "next/link";

interface props {
  link: string;
  title: string;
  className: string;
}

const HeaderLink = ({ link, title, className }: props) => {
  return (
    <li>
      <Link className={className} href={link}>
        {title}
      </Link>
    </li>
  );
};

export default HeaderLink;
