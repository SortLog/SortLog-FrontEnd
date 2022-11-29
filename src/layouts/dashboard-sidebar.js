import { useEffect, useMemo } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import HistoryIcon from "@mui/icons-material/History";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Logo } from "./logo";
import { Scrollbar } from "./scrollbar";
import { DashboardSidebarSection } from "./dashboard-sidebar-section";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import { Groups, Logout } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useAuth } from "@/hooks/use-auth";
import toast from "react-hot-toast";

const getSections = (t) => [
  {
    items: [
      {
        title: t("Dashboard"),
        path: "/dashboard",
        icon: <DashboardIcon fontSize="small" />,
      },
      {
        title: t("Items"),
        path: "/dashboard/item-list",
        icon: <InventoryIcon fontSize="small" />,
      },
      {
        title: t("Outbound"),
        icon: <MoveDownIcon fontSize="small" />,
        path: "/dashboard/outbound",
      },
      {
        title: t("Inbound"),
        icon: <MoveUpIcon fontSize="small" />,
        path: "/dashboard/inbound",
      },
      {
        title: t("History"),
        icon: <HistoryIcon fontSize="small" />,
        path: "/dashboard/history ",
      },
      {
        title: t("Member"),
        path: "/dashboard/member",
        icon: <Groups fontSize="small" />,
      },
    ],
  },
];

export const DashboardSidebar = (props) => {
  const { onClose, open } = props;
  const router = useRouter();
  const { t } = useTranslation();

  const { logout } = useAuth();
  const userLogout = async () => {
    try {
      await logout();
      localStorage.setItem("currentUser", null);
      toast.success("Logout successfully");
      await router.push("/login");
    } catch (e) {
      toast.error(e.message);
    }
  };

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
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

  useEffect(
    handlePathChange,
    /**
     * eslint-disable-next-line react-hooks/exhaustive-deps
     */
    [router.isReady, router.asPath]
  );

  const content = (
    <>
      <Scrollbar
        sx={{
          height: "100%",
          "& .simplebar-content": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div>
            <Box sx={{ p: 3 }}>
              <NextLink href="/" passHref>
                <a>
                  <Logo
                    sx={{
                      height: 42,
                      width: 42,
                    }}
                  />
                </a>
              </NextLink>
            </Box>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            {sections.map((section, i) => (
              <DashboardSidebarSection
                key={section.title + i}
                path={router.asPath}
                title={section.title}
                sx={{
                  mt: 2,
                  "& + &": {
                    mt: 2,
                  },
                }}
                {...section}
              />
            ))}
          </Box>
          <Box sx={{ p: 2 }}>
            <NextLink href="/dashboard/settings" passHref>
              <Button
                color="primary"
                startIcon={<SettingsIcon fontSize="small" />}
                component="a"
                fullWidth
                sx={{ mt: 2 }}
                variant="contained"
              >
                {t("Settings")}
              </Button>
            </NextLink>
            <Button
              color="primary"
              startIcon={<Logout fontSize="small" />}
              component="a"
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
              onClick={userLogout}
            >
              {t("Log Out")}
            </Button>
          </Box>
        </Box>
      </Scrollbar>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "primary.main",
            borderRightColor: "divider",
            borderRightStyle: "solid",
            borderRightWidth: (theme) => (theme.palette.mode === "dark" ? 1 : 0),
            color: "#FFFFFF",
            width: 200,
          },
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
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
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
  open: PropTypes.bool,
};
