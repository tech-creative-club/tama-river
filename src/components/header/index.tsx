'use client';
import { Box } from "@mui/material";
import HandymanIcon from '@mui/icons-material/Handyman';
import Tab from "./Tab";
import Top from "./Top";
import FullDivider from "@/components/misc/FullDivider";
import DescriptionIcon from '@mui/icons-material/Description';
import { useSession } from "next-auth/react";
import StyledButton from "./StyledButton";
import StyledBox from "./StyledBox";

function HeaderSection({children}: {children: React.ReactNode}){
  return (
    <Box className="flex justify-between">
      {children}
    </Box>
  );
}

function AdminTabs(){
  return (
    <Tab title="Overview" href="/" Icon={DescriptionIcon}/>
  );
}

function LoginButton(){
  return (
    <StyledBox>
      <StyledButton text="Login" />
    </StyledBox>
  );
}

export default function Header(){
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  return (
    <header>
      <HeaderSection >
        <Top title="タマリバ agent" href="/" />
        <LoginButton />
      </HeaderSection>
      <HeaderSection>
        {isAuthenticated ? <AdminTabs /> : null }
      </HeaderSection>
      <FullDivider />
    </header>
  );
}
