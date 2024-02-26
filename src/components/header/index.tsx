"use client";
import { Box, CircularProgress } from "@mui/material";
import Tab from "./Tab";
import Top from "./Top";
import FullDivider from "@/components/misc/FullDivider";
import DescriptionIcon from "@mui/icons-material/Description";
import AddCommentIcon from "@mui/icons-material/AddComment";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSession, signIn, signOut } from "next-auth/react";
import StyledButton from "./StyledButton";
import StyledBox from "./StyledBox";

function HeaderSection({ children }: { children: React.ReactNode }) {
  return <Box className="flex justify-between">{children}</Box>;
}

function AdminTabs() {
  return (
    <div className="flex justify-normal">
      <Tab title="提供記事一覧" href="/" Icon={DescriptionIcon} />
      <Tab title="提供記事追加" href="/add" Icon={AddCommentIcon} />
      <Tab title="提供記事削除" href="/delete" Icon={DeleteIcon} />
    </div>
  );
}

function LoginButton() {
  return (
    <StyledBox>
      <StyledButton
        text="Login"
        onClick={() => {
          signIn("google", {}, { prompt: "login" });
        }}
        className="bg-blue-500"
      />
    </StyledBox>
  );
}

function LogoutButton() {
  return (
    <StyledBox>
      <StyledButton
        text="LogOut"
        onClick={() => {
          signOut();
        }}
        className="bg-red-500"
        isRed
      />
    </StyledBox>
  );
}

function AuthComponent({ status }: { status: string }) {
  switch (status) {
    case "loading":
      return <CircularProgress />;
    case "authenticated":
      return <LogoutButton />;
    case "unauthenticated":
      return <LoginButton />;
    default:
      return null;
  }
}

export default function Header() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  return (
    <header>
      <HeaderSection>
        <Top title="タマリバ agent" href="/" />
        <AuthComponent status={status} />
      </HeaderSection>
      <HeaderSection>{isAuthenticated ? <AdminTabs /> : null}</HeaderSection>
      <FullDivider />
    </header>
  );
}
