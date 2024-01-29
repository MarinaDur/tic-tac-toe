import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";

const StyledScore = styled(Flex)`
  flex-direction: column;
  border-radius: 10px;
  background: ${(props) => props.$bg && `var(--color-${props.$bg})`};
  padding: 0.5rem 0;

  @media (min-width: 768px) {
    border-radius: 15px;
  }

  @media (min-width: 1350px) {
    padding: 0.5rem 0;
  }

  @media (min-width: 1440px) {
    padding: 1.2rem 0;
  }
`;

function Score({ bg, text, num }) {
  return (
    <StyledScore $bg={bg}>
      <Paragraph $size="small">{text}</Paragraph>
      <Heading as="h3" $cl="green">
        {num}
      </Heading>
    </StyledScore>
  );
}

export default Score;
