import { IconButton, ButtonGroup, Divider } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

const SwitchButton = (props: any) => {
  const { isGrid, setIsGrid } = props;

  return (
    <>
      <ButtonGroup disableElevation variant="contained">
        <IconButton
          onClick={() => {
            setIsGrid(true);
          }}
        >
          {isGrid ? <GridViewRoundedIcon /> : <GridViewIcon />}
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton
          onClick={() => {
            setIsGrid(false);
          }}
        >
          {!isGrid ? <TableRowsRoundedIcon /> : <TableRowsOutlinedIcon />}
        </IconButton>
      </ButtonGroup>
    </>
  );
};

export default SwitchButton;
