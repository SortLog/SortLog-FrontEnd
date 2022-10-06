import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  ButtonBase,
  IconButton,
  Toolbar,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
// import { AccountPopover } from './account-popover';
// import { ContactsPopover } from './contacts-popover';
// import { ContentSearchDialog } from './content-search-dialog';
// import { NotificationsPopover } from './notifications-popover';
// import { LanguagePopover } from './language-popover';

const languages = {
  en: '/mystatic/icons/uk_flag.svg',
  de: '/mystatic/icons/de_flag.svg',
  es: '/mystatic/icons/es_flag.svg'
};

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === 'light'
    ? {
      boxShadow: theme.shadows[3]
    }
    : {
      backgroundColor: theme.palette.background.paper,
      borderBottomColor: theme.palette.divider,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      boxShadow: 'none'
    })
}));

const LanguageButton = () => {
  const anchorRef = useRef(null);
  const { i18n } = useTranslation();


  
  return (
    <>
      <IconButton
        ref={anchorRef}
        sx={{ ml: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            height: 20,
            width: 20,
            '& img': {
              width: '100%'
            }
          }}
        >
          <img
            alt=""
            // @ts-ignore
            src={languages[i18n.language]}
          />
        </Box>
      </IconButton>
      {/* <LanguagePopover */}
      {/*   anchorEl={anchorRef.current} */}
      {/*   onClose={handleClosePopover} */}
      {/*   open={openPopover} */}
      {/* /> */}
    </>
  );
};

const ContentSearchButton = () => {
  return (
    <>
      <Tooltip title="Search">
        <IconButton
          sx={{ ml: 1 }}
        >
          <ManageSearchIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      {/* <ContentSearchDialog */}
      {/*   onClose={handleCloseSearchDialog} */}
      {/*   open={openDialog} */}
      {/* /> */}
    </>
  );
};

const ContactsButton = () => {
  const anchorRef = useRef(null);

  return (
    <>
      <Tooltip title="Contacts">
        <IconButton
          sx={{ ml: 1 }}
          ref={anchorRef}
        >
          <AccountCircleIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </>
  );
};

const NotificationsButton = () => {
  const anchorRef = useRef(null);
  // Unread notifications should come from a context and be shared with both this component and
  // notifications popover. To simplify the demo, we get it from the popover


  return (
    <>
      <Tooltip title="Notifications">
        <IconButton
          ref={anchorRef}
          sx={{ ml: 1 }}
        >
          <Badge
            color="error"
          >
            <NotificationsIcon fontSize="small" />
          </Badge>
        </IconButton>
      </Tooltip>

    </>
  );
};

const AccountButton = () => {
  const anchorRef = useRef(null);

  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: '/mystatic/mock-images/avatars/avatar-anika_visser.png',
    name: 'Anika Visser'
  };



  return (
    <>
      <Box
        component={ButtonBase}
        ref={anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex',
          ml: 2
        }}
      >
        <Avatar
          sx={{
            height: 40,
            width: 40
          }}
          src={user.avatar}
        >
          <AccountCircleIcon fontSize="small" />
        </Avatar>
      </Box>
    </>
  );
};

export const DashboardNavbar = (props: { [x: string]: any; onOpenSidebar: any; }) => {
  const { onOpenSidebar, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onOpenSidebar}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <LanguageButton />
          <ContentSearchButton />
          <ContactsButton />
          <NotificationsButton />
          <AccountButton />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};
