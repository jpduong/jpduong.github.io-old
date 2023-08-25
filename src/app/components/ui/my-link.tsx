import { ContainerProps } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
interface Props extends ContainerProps {
  children: ReactNode;
  href: string;
}

export const MyLink = ({ children, href }: Props) => {
  return (
    <Link href={href} passHref target="_blank">
      {children}
    </Link>
  );
};
