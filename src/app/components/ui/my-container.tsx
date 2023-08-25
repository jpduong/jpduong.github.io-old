import { Container, ContainerProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ContainerProps {
  children: ReactNode;
}

export const MyContainer = ({ children, ...otherProps }: Props) => {
  return (
    <Container maxWidth="3xl" {...otherProps}>
      {children}
    </Container>
  );
};
