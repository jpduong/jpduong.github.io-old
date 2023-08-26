import { ContainerProps, Heading } from "@chakra-ui/react";

interface Props extends ContainerProps {
  text: string;
}

export const MyHeading = ({ text }: Props) => {
  return (
    <Heading fontWeight={"bold"} mb={4}>
      {text}
    </Heading>
  );
};
