import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Chip, Paper } from "@mui/material";

interface ChipData {
  key: number;
  label: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      listStyle: "none",
      padding: "5px",
      margin: 0,
    },
    chip: {
      margin: "5px",
    },
  })
);

export default function TagsArray(props: any) {
  const { tags } = props;

  const tagsChipData = tags?.map((data: any) => {
    return { key: tags.indexOf(data), label: data };
  });

  console.log(tagsChipData);
  const classes = useStyles();
  const [chipData, setChipData] = React.useState<ChipData[]>(tagsChipData);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper component="ul" className={classes.root}>
      {chipData?.map((data) => {
        return (
          <li key={data.key}>
            <Chip label={data.label} onDelete={handleDelete(data)} className={classes.chip} />
          </li>
        );
      })}
    </Paper>
  );
}
