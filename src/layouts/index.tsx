import {ReactNode, useState} from "react";
import { styled } from '@mui/material/styles';
import { DashboardSidebar } from './dashboard-sidebar';
// @ts-ignore
import { useRouter } from 'next/router'


import { Box } from '@mui/material';
import PropTypes from "prop-types";

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter()
  console.log('pathname', location.pathname);
  if(router.pathname.includes('dashboard') ){
    return (
      <>
        <DashboardLayoutRoot>
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 auto',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            {children}
          </Box>
        </DashboardLayoutRoot>
        <DashboardSidebar
          onClose={() => setIsSidebarOpen(false)}
          open={isSidebarOpen}
        />
      </>
    )
  } else {
    return(
      <>
        {children}
      </>
    )
  }
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};

export default DashboardLayout;
