import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { MyLink } from "./my-link";
import { FaLink } from "react-icons/fa";

interface Props {
  name: string;
  description: string;
  href: string;
}

export const MyCard = ({ name, description, href }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card
      align="center"
      variant="outline"
      boxShadow={
        colorMode === "dark"
          ? "0px 4px 10px rgba(255, 255, 255, 0.2)"
          : undefined
      }
      borderRadius="md"
    >
      <CardHeader>
        <Heading size="md" fontWeight={"bold"}>
          {name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <MyLink href={href}>
          <IconButton icon={<FaLink />} aria-label="link icon" />
        </MyLink>
      </CardFooter>
    </Card>
  );
};
