"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import {
  Dialog,
  DialogContent
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ImageType = {
  url: string;
  title?: string;
  description?: string;
  width: number;
  height: number;
  contentfulMetadata: {
    tags: [
      {
        name: string;
      }
    ];
  };
};

function GalleryGrid(props: { images: ImageType[] }) {
  const { images } = props;
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    selectedTag === "all"
      ? images
      : images.filter((image) =>
          image.contentfulMetadata.tags.some((tag) =>
            tag.name.includes(selectedTag)
          )
        );

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : filteredImages.length - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < filteredImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div id='images-container' className={"component-container mt-12"}>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          }
        >
          {filteredImages.map((image: ImageType, index: number) => (
            <div
              key={index}
              className='cursor-pointer'
              onClick={() => openModal(index)}
            >
              <Image
                alt={image.description ? image.description : ""}
                src={image.url}
                width={300}
                height={150}
                className='object-cover w-full h-full'
                quality={50}
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className='max-w-3xl w-full h-[80vh] flex items-center justify-center'>
          <div className='relative w-full h-full'>
            <Image
              alt={filteredImages[currentImageIndex]?.description || ""}
              src={filteredImages[currentImageIndex]?.url || ""}
              width={filteredImages[currentImageIndex].width}
              height={filteredImages[currentImageIndex].height}
              style={{ width: "100%", height: "auto" }}
              quality={100}
              loading='eager'
            />
            <Button
              variant='default'
              size='icon'
              className='absolute left-4 top-1/2 transform -translate-y-1/2'
              onClick={goToPreviousImage}
            >
              <ChevronLeft className='h-6 w-6' />
            </Button>
            <Button
              variant='default'
              size='icon'
              className='absolute right-4 top-1/2 transform -translate-y-1/2'
              onClick={goToNextImage}
            >
              <ChevronRight className='h-6 w-6' />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GalleryGrid;
