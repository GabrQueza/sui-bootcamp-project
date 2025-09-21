"use client";

import { Button } from "@/components/ui/button";
import { useGalleryData } from "@/hooks/useGalleryData";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { isOwner } = useGalleryData();

  const handleOwnerLogin = () => {
    router.push("/dono");
  };

  const handleUserLogin = () => {
    router.push("/usuario");
  };

  return (
    <div className="flex flex-row h-screen justify-center gap-2 items-center">
      {isOwner && <Button onClick={handleOwnerLogin}>Entrar como dono</Button>}
      <Button onClick={handleUserLogin}>Entrar como usuário</Button>
    </div>
  );
}
