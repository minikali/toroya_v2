import Hero from '@components/Hero';
import Layout from '@layouts/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        eveniet? Illum ab fugit ipsum voluptatibus facilis eveniet voluptates
        ipsa doloribus, natus eligendi quibusdam ipsam, autem nulla. Autem
        consectetur error dolor!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        eveniet? Illum ab fugit ipsum voluptatibus facilis eveniet voluptates
        ipsa doloribus, natus eligendi quibusdam ipsam, autem nulla. Autem
        consectetur error dolor!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        eveniet? Illum ab fugit ipsum voluptatibus facilis eveniet voluptates
        ipsa doloribus, natus eligendi quibusdam ipsam, autem nulla. Autem
        consectetur error dolor!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        eveniet? Illum ab fugit ipsum voluptatibus facilis eveniet voluptates
        ipsa doloribus, natus eligendi quibusdam ipsam, autem nulla. Autem
        consectetur error dolor!
      </p>
    </Layout>
  );
};

export default Home;
