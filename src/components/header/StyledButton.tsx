'use client';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function StyledButton( {text} : {text: string} ){
  const router = useRouter();
  return (
    <Button variant="contained" className=' bg-blue-500'>
      <Typography sx={{ textTransform: 'capitalize', fontSize: "1.25rem"}}>
        {text}
      </Typography>
    </Button>
  );
}
