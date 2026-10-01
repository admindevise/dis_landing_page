import type { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';

interface IconTextProps {
  icon: ReactNode;
  text: string;
}

const IconTextProps = ({ icon, text }: IconTextProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {icon}
      <Typography variant="body1">{text}</Typography>
    </Stack>
  );
}

export default IconTextProps