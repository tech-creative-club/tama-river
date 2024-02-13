'use client';
import { Button, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function HoverButton( {text, href, Icon} : {text: string, href: string, Icon?: React.ElementType} ){
  const router = useRouter();
  return (
    <Button sx={{ "&:hover" : { backgroundColor: "#CCC" }}} onClick={() => router.push(href)}>
      {Icon && <><Icon className="text-2xl text-white" /><Box className="ml-2"/></>}
      <Typography sx={{ textTransform: 'capitalize', color: "#000", fontSize: "1.25rem"}}>
        {text}
      </Typography>
    </Button>
  );
}
