import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Morgan Lupton - Product-focused Sales Engineer"
      description="Washington, D.C. based Sales Engineer with an emphasis on delivering high quality products and services"
    >
      <Hero />
    </ContainerBlock>
  );
}

