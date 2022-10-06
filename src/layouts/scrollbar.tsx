import 'simplebar/dist/simplebar.min.css';
import {ForwardedRef, forwardRef} from 'react';
import SimpleBar from 'simplebar-react';
import { styled } from '@mui/material/styles';

const ScrollbarRoot = styled(SimpleBar)``;

// eslint-disable-next-line react/display-name
export const Scrollbar = forwardRef((props: any, ref: ForwardedRef<any>) => {
  return (
    <ScrollbarRoot
      ref={ref}
      {...props} />
  );
});
