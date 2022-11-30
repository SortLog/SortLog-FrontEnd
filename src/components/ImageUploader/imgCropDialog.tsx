import React, { useRef } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ImageCropper from "./imgCropper";

interface RefObject {
  getCropData: () => void;
}

const ImgCropDialog: React.FC<{
  open: boolean;
  dialogClose: () => void;
  img: string;
  afterCrop: any;
  aspectRatio: number;
  lockAspectRatio: boolean;
}> = ({ open, dialogClose, img, afterCrop, aspectRatio, lockAspectRatio }) => {
  const ImgCropRef = useRef<RefObject>(null);
  return (
    <Dialog open={open} onClose={dialogClose}>
      <DialogTitle>Crop your picture</DialogTitle>
      <DialogContent>
        <ImageCropper
          aspectRatio={aspectRatio}
          src={img}
          lockAspectRatio={lockAspectRatio}
          ref={ImgCropRef}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            dialogClose();
            if (ImgCropRef.current) {
              afterCrop(ImgCropRef.current.getCropData());
            }
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImgCropDialog;
