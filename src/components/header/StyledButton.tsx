'use client';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function StyledButton( {text, className, onClick} : {text: string, className?: string | undefined, onClick?: () => void | undefined} ){
  const router = useRouter();
  return (
    // TODO: Actionを入れられるようにする
    <Button variant="contained" className={className} onClick={() => { onClick?.() }}>
      <Typography sx={{ textTransform: 'capitalize', fontSize: "1.25rem"}}>
        {text}
      </Typography>
    </Button>
  );
}
