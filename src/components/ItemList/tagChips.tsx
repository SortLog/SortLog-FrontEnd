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
  const { tags, setTag } = props;

  const tagsChipData = tags?.map((data: any) => {
    return { key: tags.indexOf(data), label: data };
  });

  if (!tagsChipData) {
    return null;
  }

  const classes = useStyles();
  // const [chipData, setChipData] = React.useState<ChipData[]>(tagsChipData);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setTag(
      tagsChipData.filter((tag: any) => tag.key !== chipToDelete.key).map((tag: any) => tag.label)
    );
    // setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    // const newTag = chipData.map((data) => data.label);
    // setTag(newTag);
  };

  // console.log(chipData);
  // console.log(newTag);
  // console.log(tags);

  return (
    <>
      {tagsChipData.map((data: any, i: any) => {
        return (
          <Chip label={data.label} key={i} onDelete={handleDelete(data)} className={classes.chip} />
        );
      })}
    </>
  );
}
