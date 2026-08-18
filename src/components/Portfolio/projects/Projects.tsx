import React, {useState} from 'react';
import s from './Projects.module.scss'
import {v1} from "uuid";
import {categoryLabels, Project, ProjectCategory, ProjectProps} from "./project/Project"
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
import brightSlots from '../../../assets/image/sitesSPA/brightSlots.jpg'
import namazonClub from '../../../assets/image/sitesSPA/namazonClub.jpg'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import './react-tabs.scss';
import {Fade} from "react-awesome-reveal";
import {clsx} from "clsx";

type SelectedCategory = 'ALL' | ProjectCategory

const categoryOptions: { label: string, value: SelectedCategory }[] = [
  {label: 'All', value: 'ALL'},
  {label: categoryLabels.COMMERCIAL, value: 'COMMERCIAL'},
  {label: categoryLabels.PET, value: 'PET'},
  {label: categoryLabels.SKELETON, value: 'SKELETON'},
]


const projectsSPA: Array<ProjectsArray> = [
  {
    id: v1(),
    title: 'Namazon Club',
    description: 'Video сlub of female and mixed wrestling',
    link: 'https://namazon.club',
    img: {backgroundImage: `url(${namazonClub})`},
    category: 'PET',
  },
  {
    id: v1(),
    title: 'Bright Slots',
    description: 'My PixiJS game prototype',
    link: 'https://bright-slots.vercel.app',
    img: {backgroundImage: `url(${brightSlots})`},
    category: 'SKELETON',
  },
  {
    id: v1(),
    title: 'ZenexHub',
    description: 'The first iGaming-Fintech ecosystem with Revolutionary solutions!',
    link: 'https://zenexhub.com/',
    img: {backgroundImage: `url(${zenexhub})`},
    category: 'COMMERCIAL',
  },
  {
    id: v1(),
    title: 'ZenexCoin',
    description: 'Landing for ZenexHub.',
    link: 'https://zenex-coin.com/',
    img: {backgroundImage: `url(${zenexcoin})`},
    category: 'COMMERCIAL',
  },
  {
    id: v1(),
    title: 'Zenex Game Token2049 bot',
    description: 'Telegram bot for TOKEN2049 event with crypto games.',
    link: 'https://t.me/ZenexGameBot',
    img: {backgroundImage: `url(${token2049})`},
    category: 'COMMERCIAL',
  },
  {
    id: v1(),
    title: 'Zenex.fun',
    description: 'Landing for live event with Treasure Hunt crypto game.',
    link: 'https://play.zenex.fun',
    img: {backgroundImage: `url(${treasurehunt})`},
    category: 'COMMERCIAL',
  },
  {
    id: v1(),
    title: 'BrightLists',
    description: 'NEW app for learning cards. Done with Vite, Redux toolkit, RTK Query.',
    link: 'https://iti-flashcards.vercel.app',
    img: {backgroundImage: `url(${flashcards})`},
    presentationLink: 'https://youtu.be/o6dkzYoA0DU',
    category: 'SKELETON',
  },
  {
    id: v1(),
    title: 'Keresverse',
    description: 'App for crypto game with chat',
    link: 'https://braivs.github.io/keres_fork',
    img: {backgroundImage: `url(${keresverse})`},
    presentationLink: 'https://youtu.be/vKy8Jx32-2c',
    category: 'COMMERCIAL',
  },
  {
    id: v1(),
    title: 'HydroBridge (Inactive)',
    description: 'An app for converting HYDRO tokens from one chain to another. Currently, this app only works partially because the smart contracts for this token are not operational.',
    link: 'https://braivs.github.io/bridge_fork',
    img: {backgroundImage: `url(${hydro_bridge})`},
    presentationLink: 'https://youtu.be/JLLg7XZ_q1A',
    category: 'COMMERCIAL',
  },
  {
    id: v1(),
    title: 'BrightCards',
    description: 'App for learning cards.',
    link: 'https://braivs.github.io/iti_bright_cards_c2',
    img: {backgroundImage: `url(${cardsImage})`},
    presentationLink: 'https://youtu.be/DlPUBMoZHYI',
    category: 'SKELETON',
  },
  {
    id: v1(),
    title: 'BrightNet',
    description: 'Social network for samurais.',
    link: 'https://braivs.github.io/iti_social_network/',
    img: {backgroundImage: `url(${socialImage})`},
    presentationLink: 'https://youtu.be/KgFnOPTQOKk',
    category: 'SKELETON',
  },
  {
    id: v1(),
    title: 'Brello',
    description: 'Trello analog by BriWS = Brello.',
    link: 'https://braivs.github.io/iti_brello',
    img: {backgroundImage: `url(${todoImage})`},
    presentationLink: 'https://youtu.be/TQIYwBnhzYg',
    category: 'SKELETON',
  },
  {
    id: v1(),
    title: 'Counter',
    description: 'Counter with settings.',
    link: 'https://braivs.github.io/iti_counter',
    img: {backgroundImage: `url(${counterImage})`},
    presentationLink: 'https://www.youtube.com/watch?v=WB4ebCmR1A4',
    category: 'SKELETON',
  },
  {
    id: v1(),
    title: 'Namazon Club (old design)',
    description: 'Upgraded NamazonClub from "HTML, CSS, JS" version, done on React. "Club of female wrestling. With video shop."',
    link: 'https://braivs.github.io/namazonclub_react',
    img: {backgroundImage: `url(${namazonImage})`},
    category: 'PET',
  },
]

const projectsClassic: Array<ProjectsArray> = [
  {
    id: v1(),
    title: 'Namazon Club',
    description: 'Club of female wrestling. With video shop.',
    link: 'https://braivs.github.io/namazonClub/',
    img: {backgroundImage: `url(${namazonImage})`},
    category: 'PET',
  },
  {
    id: v1(),
    title: 'Goa excursions',
    description: 'Selling excursions in Goa.',
    link: 'https://braivs.github.io/goaexcursions/',
    img: {backgroundImage: `url(${GoaExcursionsImg})`},
    category: 'COMMERCIAL',
  },
  {
    id: v1(),
    title: 'Access Bars and Facelift',
    description: 'Access Bars and Facelift commercial practise in Goa.',
    link: 'https://braivs.github.io/goaaccess/',
    img: {backgroundImage: `url(${AccessBarsImg})`},
    category: 'COMMERCIAL',
  },
  {
    id: v1(),
    title: 'DJ Store',
    description: 'Sound technics.',
    link: 'https://braivs.github.io/testDjStore',
    img: {backgroundImage: `url(${djStoreImg})`},
    category: 'SKELETON',
  },
  {
    id: v1(),
    title: 'Cars body parts',
    description: 'Parts for cars.',
    link: 'https://braivs.github.io/psd2htmlCarcaseRepair',
    img: {backgroundImage: `url(${carsBodyPartsImg})`},
    category: 'SKELETON',
  },
  {
    id: v1(),
    title: 'Blitz',
    description: '',
    link: 'https://braivs.github.io/psd2htmlBlitz/',
    img: {backgroundImage: `url(${BlitzImg})`},
    category: 'SKELETON',
  },
  {
    id: v1(),
    title: 'Counsel',
    description: '',
    link: 'https://braivs.github.io/psd2htmlCounsel/',
    img: {backgroundImage: `url(${CounselImg})`},
    category: 'SKELETON',
  },
  {
    id: v1(),
    title: 'Cooper',
    description: '',
    link: 'https://braivs.github.io/psd2htmlCooper/',
    img: {backgroundImage: `url(${CooperImg})`},
    category: 'SKELETON',
  },
]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>('ALL')
  // Use the active tab to calculate project counts
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const activeProjects = selectedTabIndex === 0 ? projectsSPA : projectsClassic

  return (
    <div className={s.projectsBlock} id={'projects'}>
      <Fade>
        <div className={s.projectsContainer}>
          <Title text={'Projects'}/>
          <div className={s.projects}>
            <Tabs
              className={s.tabs}
              selectedIndex={selectedTabIndex}
              onSelect={setSelectedTabIndex}
            >
              <TabList>
                <Tab>SPA React, Next</Tab>
                <Tab>HTML, CSS, JS</Tab>
              </TabList>
              <div className={s.categoryFilter}>
                {categoryOptions.map(option => (
                  <div
                    key={option.value}
                    className={clsx(s.category, selectedCategory === option.value && s.selected)}
                    onClick={() => setSelectedCategory(option.value)}
                  >
                    {option.label} ({countProjects(activeProjects, option.value)})
                  </div>
                ))}
              </div>
              <div className={s.tabsContent}>
                <TabPanel className={s.tabElement}>
                  {filterProjects(projectsSPA, selectedCategory).map(el =>
                    <Project key={el.id} style={el.img} title={el.title}
                             description={el.description} link={el.link}
                             presentationLink={el.presentationLink}
                             category={el.category}/>)}
                </TabPanel>
                <TabPanel className={s.tabElement}>
                  {filterProjects(projectsClassic, selectedCategory).map(el =>
                    <Project key={el.id} style={el.img} title={el.title}
                             description={el.description} link={el.link}
                             category={el.category}/>)}
                </TabPanel>
              </div>
            </Tabs>
          </div>

        </div>
      </Fade>
    </div>

  );
}

const filterProjects = (projects: Array<ProjectsArray>, selectedCategory: SelectedCategory) => {
  if (selectedCategory === 'ALL') {
    return projects
  }

  return projects.filter(project => project.category === selectedCategory)
}

const countProjects = (projects: Array<ProjectsArray>, category: SelectedCategory) => {
  return filterProjects(projects, category).length
}

type ProjectsArray = Omit<ProjectProps, 'style'> & { id: string, img: { backgroundImage: string } }


