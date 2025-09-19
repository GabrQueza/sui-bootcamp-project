"use client";

import { useSuiClient, useCurrentAccount } from "@mysten/dapp-kit";
import { useEffect } from "react";

export const useGalleryData = () => {
  const currentAccount = useCurrentAccount();
  const client = useSuiClient();

  const galleryData = async () => {
    const gallery: any = await client.getObject({
      id: "0xd01a98ad3975b4c78815d117e32133a8d93a720bb10d0078c20f925b1f3972be",
      options: {
        showContent: true,
        showOwner: true,
      },
    });

    return { ...gallery.data.content.fields };
  };

  return {
    galleryData,
  };
};
