import PropTypes from 'prop-types';
import { List, ListSubheader } from '@mui/material';
import { DashboardSidebarItem } from './dashboard-sidebar-item';

// @ts-ignore
const renderNavItems = ({ depth = 0, items, path }) => (
  <List disablePadding>
    {items.reduce((acc: any, item: any) => reduceChildRoutes({ acc, depth, item, path }), [])}
  </List>
);

// @ts-ignore
const reduceChildRoutes = ({ acc, depth, item, path }) => {
  const key = `${item.title}-${depth}`;
  const partialMatch = item.path ? path.includes(item.path) : false;

  if (item.children) {
    acc.push(
      <DashboardSidebarItem
        active={partialMatch}
        chip={item.chip}
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={partialMatch}
        path={item.path}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          items: item.children,
          path
        })}
      </DashboardSidebarItem>
    );
  }

  return acc;
};

export const DashboardSidebarSection = (props: { [x: string]: any; items: any; path: any; title: any; }) => {
  const { items, path, title, ...other } = props;

  return (
    <List
      subheader={(
        <ListSubheader
          disableGutters
          disableSticky
          sx={{
            color: 'neutral.500',
            fontSize: '0.75rem',
            fontWeight: 700,
            lineHeight: 2.5,
            ml: 4,
            textTransform: 'uppercase'
          }}
        >
          {title}
        </ListSubheader>
      )}
      {...other}>
      {renderNavItems({
        items,
        path
      })}
    </List>
  );
};

DashboardSidebarSection.propTypes = {
  items: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
