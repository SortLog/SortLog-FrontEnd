import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Chip } from "@mui/material";

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

  if (!tagsChipData) {
    return null;
  }

  const classes = useStyles();
  const [chipData, setChipData] = React.useState<ChipData[]>(tagsChipData);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <>
      {chipData.map((data, i) => {
        return (
          <Chip label={data.label} key={i} onDelete={handleDelete(data)} className={classes.chip} />
        );
      })}
    </>
  );
}
