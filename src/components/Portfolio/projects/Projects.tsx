import React from 'react';
import s from './Projects.module.scss'
import {v1} from "uuid";
import {Project, ProjectProps} from "./project/Project"
import {Title} from "../../../common/components/title/Title";
import cardsImage from '../../../assets/image/sitesSPA/cards.jpg'
import todoImage from '../../../assets/image/sitesSPA/todolist.jpg'
import socialImage from '../../../assets/image/sitesSPA/social-network.jpg'
import counterImage from '../../../assets/image/sitesSPA/counter.jpg'
import keresverse from '../../../assets/image/sitesSPA/keresverse.jpg'
import hydro_bridge from '../../../assets/image/sitesSPA/hydro_bridge.jpg'
import flashcards from '../../../assets/image/sitesSPA/flashcards.jpg'
import namazonImage from '../../../assets/image/sitesClassic/namazon.jpg'
import djStoreImg from '../../../assets/image/sitesClassic/djStore.jpg'
import GoaExcursionsImg from '../../../assets/image/sitesClassic/GoaExcursions.jpg'
import AccessBarsImg from '../../../assets/image/sitesClassic/AccessBar.jpg'
import carsBodyPartsImg from '../../../assets/image/sitesClassic/carsBodyParts.jpg'
import BlitzImg from '../../../assets/image/sitesClassic/Blitz.jpg'
import CounselImg from '../../../assets/image/sitesClassic/Counsel.jpg'
import CooperImg from '../../../assets/image/sitesClassic/Cooper.jpg'
import NamazonNewDesign from '../../../assets/image/sitesSPA/namazonNewDesign.jpg'
import zenexhub from '../../../assets/image/sitesSPA/zenexhub.jpg'
import zenexcoin from '../../../assets/image/sitesSPA/zenexcoin.jpg'
import treasurehunt from '../../../assets/image/sitesSPA/treasurehunt.jpg'
import token2049 from '../../../assets/image/sitesSPA/token2049.jpg'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import './react-tabs.scss';
import {Fade} from "react-awesome-reveal";


const projectsSPA: Array<ProjectsArray> = [
  {
    id: v1(),
    title: 'ZenexHub',
    description: 'The first iGaming-Fintech ecosystem with Revolutionary solutions!',
    link: 'https://zenexhub.com/',
    img: {backgroundImage: `url(${zenexhub})`},
  },
  {
    id: v1(),
    title: 'ZenexCoin',
    description: 'Landing for ZenexHub.',
    link: 'https://zenexhub.com/',
    img: {backgroundImage: `url(${zenexcoin})`},
  },
  {
    id: v1(),
    title: 'Zenex Game Token2049 bot',
    description: 'Telegram bot for TOKEN2049 event with crypto games.',
    link: 'https://t.me/ZenexGameBot',
    img: {backgroundImage: `url(${token2049})`},
  },
  {
    id: v1(),
    title: 'Zenex.fun',
    description: 'Landing for live event with Treasure Hunt crypto game.',
    link: 'https://play.zenex.fun',
    img: {backgroundImage: `url(${treasurehunt})`},
  },
  {
    id: v1(),
    title: 'BrightLists',
    description: 'NEW app for learning cards. Done with Vite, Redux toolkit, RTK Query.',
    link: 'https://iti-flashcards.vercel.app',
    img: {backgroundImage: `url(${flashcards})`},
    presentationLink: 'https://youtu.be/o6dkzYoA0DU'
  },
  {
    id: v1(),
    title: 'Keresverse',
    description: 'App for crypto game with chat',
    link: 'https://braivs.github.io/keres_fork',
    img: {backgroundImage: `url(${keresverse})`},
    presentationLink: 'https://youtu.be/vKy8Jx32-2c'
  },
  {
    id: v1(),
    title: 'HydroBridge (Inactive)',
    description: 'An app for converting HYDRO tokens from one chain to another. Currently, this app only works partially because the smart contracts for this token are not operational.',
    link: 'https://braivs.github.io/bridge_fork',
    img: {backgroundImage: `url(${hydro_bridge})`},
    presentationLink: 'https://youtu.be/JLLg7XZ_q1A'
  },
  {
    id: v1(),
    title: 'BrightCards',
    description: 'App for learning cards.',
    link: 'https://braivs.github.io/iti_bright_cards_c2',
    img: {backgroundImage: `url(${cardsImage})`},
    presentationLink: 'https://youtu.be/DlPUBMoZHYI',
  },
  {
    id: v1(),
    title: 'BrightNet',
    description: 'Social network for samurais.',
    link: 'https://braivs.github.io/iti_social_network/',
    img: {backgroundImage: `url(${socialImage})`},
    presentationLink: 'https://youtu.be/KgFnOPTQOKk'
  },
  {
    id: v1(),
    title: 'Brello',
    description: 'Trello analog by BriWS = Brello.',
    link: 'https://braivs.github.io/iti_brello',
    img: {backgroundImage: `url(${todoImage})`},
    presentationLink: 'https://youtu.be/TQIYwBnhzYg'
  },
  {
    id: v1(),
    title: 'Counter',
    description: 'Counter with settings.',
    link: 'https://braivs.github.io/iti_counter',
    img: {backgroundImage: `url(${counterImage})`},
    presentationLink: 'https://www.youtube.com/watch?v=WB4ebCmR1A4'
  },
  {
    id: v1(),
    title: 'Namazon Club NextJS upgrade.',
    description: 'Next.js version of NamazonClub.',
    link: 'https://namazon.club',
    img: {backgroundImage: `url(${NamazonNewDesign})`}
  },
  {
    id: v1(),
    title: 'Namazon Club',
    description: 'Upgraded NamazonClub from "HTML, CSS, JS" version, done on React. "Club of female wrestling. With video shop."',
    link: 'https://braivs.github.io/namazonclub_react',
    img: {backgroundImage: `url(${namazonImage})`}
  },
]

const projectsClassic = [
  {
    id: v1(),
    title: 'Namazon Club',
    description: 'Club of female wrestling. With video shop.',
    link: 'https://braivs.github.io/namazonClub/',
    img: {backgroundImage: `url(${namazonImage})`}
  },
  {
    id: v1(),
    title: 'Goa excursions',
    description: 'Selling excursions in Goa.',
    link: 'https://braivs.github.io/goaexcursions/',
    img: {backgroundImage: `url(${GoaExcursionsImg})`}
  },
  {
    id: v1(),
    title: 'Access Bars and Facelift',
    description: 'Access Bars and Facelift commercial practise in Goa.',
    link: 'https://braivs.github.io/goaaccess/',
    img: {backgroundImage: `url(${AccessBarsImg})`}

  },
  {
    id: v1(),
    title: 'DJ Store',
    description: 'Sound technics.',
    link: 'https://braivs.github.io/testDjStore',
    img: {backgroundImage: `url(${djStoreImg})`}

  },
  {
    id: v1(),
    title: 'Cars body parts',
    description: 'Parts for cars.',
    link: 'https://braivs.github.io/psd2htmlCarcaseRepair',
    img: {backgroundImage: `url(${carsBodyPartsImg})`}

  },
  {
    id: v1(),
    title: 'Blitz',
    description: '',
    link: 'https://braivs.github.io/psd2htmlBlitz/',
    img: {backgroundImage: `url(${BlitzImg})`}

  },
  {
    id: v1(),
    title: 'Counsel',
    description: '',
    link: 'https://braivs.github.io/psd2htmlCounsel/',
    img: {backgroundImage: `url(${CounselImg})`}

  },
  {
    id: v1(),
    title: 'Cooper',
    description: '',
    link: 'https://braivs.github.io/psd2htmlCooper/',
    img: {backgroundImage: `url(${CooperImg})`}

  },
]

export function Projects() {
  return (
    <div className={s.projectsBlock} id={'projects'}>
      <Fade>
        <div className={s.projectsContainer}>
          <Title text={'Projects'}/>
          <div className={s.projects}>
            <Tabs className={s.tabs}>
              <TabList>
                <Tab>SPA React, Next</Tab>
                <Tab>HTML, CSS, JS</Tab>
              </TabList>
              <div className={s.tabsContent}>
                <TabPanel className={s.tabElement}>
                  {projectsSPA.map(el => <Project key={el.id} style={el.img} title={el.title}
                                                  description={el.description} link={el.link}
                                                  presentationLink={el.presentationLink}/>)}
                </TabPanel>
                <TabPanel className={s.tabElement}>
                  {projectsClassic.map(el => <Project key={el.id} style={el.img} title={el.title}
                                                      description={el.description} link={el.link}/>)}
                </TabPanel>
              </div>
            </Tabs>
          </div>

        </div>
      </Fade>
    </div>

  );
}

type ProjectsArray = Omit<ProjectProps, 'style'> & { id: string, img: { backgroundImage: string } }


