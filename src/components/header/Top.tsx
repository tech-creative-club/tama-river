'use client';
import HoverButton from "./HoverButton";
import StyledBox from "./StyledBox";

export default function Top({title, href, Icon} : {title: string, href: string, Icon?: React.ElementType}){
  return (
    <StyledBox>
      <HoverButton text={title} href={href} Icon={Icon}/>
    </StyledBox>
  );
}
