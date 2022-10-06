import { useEffect, useMemo } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Logo } from './logo';
import { Scrollbar } from './scrollbar';
import { DashboardSidebarSection } from './dashboard-sidebar-section';

const getSections = (t: any) => [
  {
    title: t('General'),
    items: [
      {
        title: t('Overview'),
        path: '/',
        icon: <HomeIcon fontSize="small" />
      },
      // {
      //   title: t('Analytics'),
      //   path: '/dashboard/analytics',
      //   icon: <ChartBarIcon fontSize="small" />
      // },
      // {
      //   title: t('Finance'),
      //   path: '/dashboard/finance',
      //   icon: <ChartPieIcon fontSize="small" />
      // },
      // {
      //   title: t('Logistics'),
      //   path: '/dashboard/logistics',
      //   icon: <TruckIcon fontSize="small" />,
      //   chip: <Chip
      //     color="secondary"
      //     label={(
      //       <Typography
      //         sx={{
      //           fontSize: '10px',
      //           fontWeight: '600'
      //         }}
      //       >
      //         NEW
      //       </Typography>
      //     )}
      //     size="small"
      //   />
      // },
      // {
      //   title: t('Account'),
      //   path: '/dashboard/account',
      //   icon: <UserCircleIcon fontSize="small" />
      // }
    ]
  },
  {
    title: t('Management'),
    items: [
      // {
      //   title: t('Customers'),
      //   path: '/dashboard/customers',
      //   icon: <UsersIcon fontSize="small" />,
      //   children: [
      //     {
      //       title: t('List'),
      //       path: '/dashboard/customers'
      //     },
      //     {
      //       title: t('Details'),
      //       path: '/dashboard/customers/1'
      //     },
      //     {
      //       title: t('Edit'),
      //       path: '/dashboard/customers/1/edit'
      //     }
      //   ]
      // },
      {
        title: t('login'),
        path: '/login',
        icon: <ShoppingCartIcon fontSize="small" />,
        // children: [
        //   {
        //     title: t('Items'),
        //     path: '/items'
        //   },
        // {
        //   title: t('Create'),
        //   path: '/dashboard/products/new'
        // }
        // ]
      },
      {
        title: t('Example'),
        icon: <ShoppingCartIcon fontSize="small" />,
        path: '/example',
        // children: [
        //   {
        //     title: t('Item Types'),
        //     path: '/example'
        //   },
        // {
        //   title: t('Details'),
        //   path: '/dashboard/itemtype/1'
        // }
        // ]
      },
      {
        title: t('Advanced Search'),
        path: '/store',
        icon: <ManageSearchIcon fontSize="small" />,
        // children: [
        //   {
        //     title: t('List'),
        //     path: '/dashboard/invoices'
        //   },
        //   {
        //     title: t('Details'),
        //     path: '/dashboard/invoices/1'
        //   }
        // ]
      }
    ]
  },
  // {
  //   title: t('Platforms'),
  //   items: [
  // {
  //   title: t('Job Listings'),
  //   path: '/dashboard/jobs',
  //   icon: <OfficeBuildingIcon fontSize="small" />,
  //   children: [
  //     {
  //       title: t('Browse'),
  //       path: '/dashboard/jobs'
  //     },
  //     {
  //       title: t('Details'),
  //       path: '/dashboard/jobs/companies/1'
  //     },
  //     {
  //       title: t('Create'),
  //       path: '/dashboard/jobs/new'
  //     }
  //   ]
  // },
  // {
  //   title: t('Social Media'),
  //   path: '/dashboard/social',
  //   icon: <ShareIcon fontSize="small" />,
  //   children: [
  //     {
  //       title: t('Profile'),
  //       path: '/dashboard/social/profile'
  //     },
  //     {
  //       title: t('Feed'),
  //       path: '/dashboard/social/feed'
  //     }
  //   ]
  // },
  // {
  //   title: t('Blog'),
  //   path: '/blog',
  //   icon: <NewspaperIcon fontSize="small" />,
  //   children: [
  //     {
  //       title: t('Post List'),
  //       path: '/blog'
  //     },
  //     {
  //       title: t('Post Details'),
  //       path: '/blog/1'
  //     },
  //     {
  //       title: t('Post Create'),
  //       path: '/blog/new'
  //     }
  //   ]
  // }
  // ]
  // },
  // {
  //   title: t('Apps'),
  //   items: [
  // {
  //   title: t('Kanban'),
  //   path: '/dashboard/kanban',
  //   icon: <ClipboardListIcon fontSize="small" />
  // },
  // {
  //   title: t('Mail'),
  //   path: '/dashboard/mail',
  //   icon: <MailIcon fontSize="small" />
  // },
  // {
  //   title: t('Chat'),
  //   path: '/dashboard/chat',
  //   icon: <ChatAlt2Icon fontSize="small" />
  // },
  // {
  //   title: t('Calendar'),
  //   path: '/dashboard/calendar',
  //   icon: <CalendarIcon fontSize="small" />
  // }
  // ]
  // },
  // {
  //   title: t('Pages'),
  //   items: [
  //     {
  //       title: t('Auth'),
  //       path: '/authentication',
  //       icon: <LockClosedIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: t('Register'),
  //           path: '/authentication/register?disableGuard=true'
  //         },
  //         {
  //           title: t('Login'),
  //           path: '/authentication/login?disableGuard=true'
  //         }
  //       ]
  //     },
  //     {
  //       title: t('Pricing'),
  //       path: '/dashboard/pricing',
  //       icon: <CreditCardIcon fontSize="small" />
  //     },
  //     {
  //       title: t('Checkout'),
  //       path: '/checkout',
  //       icon: <CashIcon fontSize="small" />
  //     },
  //     {
  //       title: t('Contact'),
  //       path: '/contact',
  //       icon: <MailOpenIcon fontSize="small" />
  //     },
  //     {
  //       title: t('Error'),
  //       path: '/error',
  //       icon: <XCircleIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: '401',
  //           path: '/401'
  //         },
  //         {
  //           title: '404',
  //           path: '/404'
  //         },
  //         {
  //           title: '500',
  //           path: '/500'
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export const DashboardSidebar = (props: any) => {
  const { onClose, open } = props;
  const router = useRouter();
  const { t } = useTranslation();
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'), {
    noSsr: true
  });
  const sections = useMemo(() => getSections(t), [t]);

  const handlePathChange = () => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  };

  useEffect(handlePathChange,
    /**
       * eslint-disable-next-line react-hooks/exhaustive-deps
       */
    [router.isReady, router.asPath]);


  // @ts-ignore
  const content = (
    <>
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': {
            height: '100%'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <div>
            <Box sx={{ p: 3 }}>
              <NextLink
                href="/"
                passHref
              >
                <a>
                  <Logo
                    sx={{
                      height: 42,
                      width: 42
                    }}
                  />
                </a>
              </NextLink>
            </Box>

          </div>
          <Divider
            sx={{
              borderColor: '#2D3748',
              my: 3
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            {sections.map((section: any) => (
              <DashboardSidebarSection
                key={section.title}
                path={router.asPath}
                sx={{
                  mt: 2,
                  '& + &': {
                    mt: 2
                  }
                }}
                {...section} />
            ))}
          </Box>
          <Divider
            sx={{
              borderColor: '#2D3748' // dark divider
            }}
          />
        </Box>
      </Scrollbar>
      {/* <OrganizationPopover */}
      {/*   anchorEl={organizationsRef.current} */}
      {/*   onClose={handleCloseOrganizationsPopover} */}
      {/*   open={openOrganizationsPopover} */}
      {/* /> */}
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            borderRightColor: 'divider',
            borderRightStyle: 'solid',
            borderRightWidth: (theme) => theme.palette.mode === 'dark' ? 1 : 0,
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
