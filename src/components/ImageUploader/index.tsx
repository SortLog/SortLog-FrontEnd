import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box } from "@mui/material";
import ImgCropDialog from "./imgCropDialog";
import hotToast from "../../utils/hotToast";

const ImgDropzone = ({
  children,
  accept,
  afterCrop,
  aspectRatio,
  lockAspectRatio = true,
}: {
  children: React.ReactNode;
  accept: string;
  afterCrop: any;
  aspectRatio: number;
  lockAspectRatio?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string>("");
  // @ts-ignore
  const onDrop = useCallback(([file]) => {
    const reader = new FileReader();
    reader.onabort = () => hotToast("fail", "file reading was aborted");
    reader.onerror = () => hotToast("fail", "file reading has failed");
    reader.onload = () => {
      setImage(reader.result as string);
      setOpen(true);
    };
    reader.readAsDataURL(file);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    // @ts-ignore
    accept,
    maxFiles: 1,
    maxSize: 4000000,
    minSize: 0,
    // @ts-ignore
    onDrop,
  });

  return (
    <>
      <Box {...getRootProps()}>
        <input {...getInputProps()} />
        {children}
      </Box>
      <ImgCropDialog
        open={open}
        dialogClose={() => {
          setOpen(false);
        }}
        img={image}
        afterCrop={afterCrop}
        aspectRatio={aspectRatio}
        lockAspectRatio={lockAspectRatio}
      />
    </>
  );
};

export default ImgDropzone;
