import PrimaryButton from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AboutPage } from "@/components/AboutPage";
import styles from "./app.module.css";
import Profile from "@/components/DisplayData";
import ConditionalRendering from "@/components/ConditionalRendering";
import RenderingLists from "@/components/Renderinglists";

export default function Home() {
  return (
    <main className="p-2">
      Home
      <button className="bg-green-500 p-2 rounded-sm">Click me</button>
      <div className="flex gap-5 py-5">
        <PrimaryButton />
        <Input />
        <Button variant={"secondary"}>ShadCN UI Button</Button>
      </div>
      <PrimaryButton />
      <PrimaryButton />
      <PrimaryButton />
      <AboutPage />
      <img
        className={styles.img}
        src="https://images.unsplash.com/photo-1723754166148-2ceb2d84890f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Profile />
      <ConditionalRendering />
      <RenderingLists />
    </main>
  );
}
