import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import "../globals.css";

interface EmailExampleProps {
  name?: string;
  email?: string;
}

export const EmailExample = ({}: EmailExampleProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome David!</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            {/* <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/static/vercel-logo.png`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section> */}
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Welcome <strong>David</strong> on <strong>Mentions</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello David,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>Georginho</strong> (
              <Link
                href={`mailto:${"georgecavalcantiti@gmail.com"}`}
                className="text-blue-600 no-underline"
              >
                {"georgecavalcantiti@gmail.com"}
              </Link>
              ) has invited you to the <strong>Mentinhos</strong> team on{" "}
              <strong>Mentions</strong>.
            </Text>
            {/* <Section>
              <Row>
                <Column align="right">
                  <Img
                    className="rounded-full"
                    src={userImage}
                    width="64"
                    height="64"
                  />
                </Column>
                <Column align="center">
                  <Img
                    src={`${baseUrl}/static/vercel-arrow.png`}
                    width="12"
                    height="9"
                    alt="invited you to"
                  />
                </Column>
                <Column align="left">
                  <Img
                    className="rounded-full"
                    src={teamImage}
                    width="64"
                    height="64"
                  />
                </Column>
              </Row>
            </Section> */}
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href="#"
              >
                Join the team
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link href="#" className="text-blue-600 no-underline">
                Invite Link Here
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for{" "}
              <span className="text-black">geozinho</span>. This invite was sent
              from <span className="text-black">Elvis Ferreira</span> located in{" "}
              <span className="text-black">Garanhuns</span>. If you were not
              expecting this invitation, you can ignore this email. If you are
              concerned about your account's safety, please reply to this email
              to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailExample;
