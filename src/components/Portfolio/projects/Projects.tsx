import React from 'react';
import s from './Projects.module.scss'
import {v1} from "uuid";
import {Project} from "./project/Project";
import {Title} from "../../../common/components/title/Title";
import cardsImage from '../../../assets/image/sitesSPA/cards.jpg'
import todoImage from '../../../assets/image/sitesSPA/todolist.jpg'
import socialImage from '../../../assets/image/sitesSPA/social-network.jpg'
import counterImage from '../../../assets/image/sitesSPA/counter.jpg'
import keresverse from '../../../assets/image/sitesSPA/keresverse.jpg'
import hydro_bridge from '../../../assets/image/sitesSPA/hydro_bridge.jpg'
import namazonImage from '../../../assets/image/sitesClassic/namazon.jpg'
import djStoreImg from '../../../assets/image/sitesClassic/djStore.jpg'
import GoaExcursionsImg from '../../../assets/image/sitesClassic/GoaExcursions.jpg'
import AccessBarsImg from '../../../assets/image/sitesClassic/AccessBar.jpg'
import carsBodyPartsImg from '../../../assets/image/sitesClassic/carsBodyParts.jpg'
import BlitzImg from '../../../assets/image/sitesClassic/Blitz.jpg'
import CounselImg from '../../../assets/image/sitesClassic/Counsel.jpg'
import CooperImg from '../../../assets/image/sitesClassic/Cooper.jpg'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import './react-tabs.scss';
import {Fade} from "react-awesome-reveal";


const projectsSPA = [
    {
        id: v1(),
        title: 'Keresverse',
        description: 'App for crypto game with chat',
        link: 'https://braivs.github.io/keres_fork',
        img: {backgroundImage: `url(${keresverse})`}
    },
    {
        id: v1(),
        title: 'HydroBridge',
        description: 'App for convertion HYDRO token from chain to chain',
        link: 'https://braivs.github.io/bridge_fork',
        img: {backgroundImage: `url(${hydro_bridge})`}
    },
    {
        id: v1(),
        title: 'BrightCards',
        description: 'App for learning cards.',
        link: 'https://braivs.github.io/iti_bright_cards_c2',
        img: {backgroundImage: `url(${cardsImage})`}
    },
    {
        id: v1(),
        title: 'BrightNet',
        description: 'Social network for samurais.',
        link: 'https://braivs.github.io/iti_social_network/',
        img: {backgroundImage: `url(${socialImage})`}
    },
    {
        id: v1(),
        title: 'Brello',
        description: 'Trello analog by BriWS = Brello. ',
        link: 'https://braivs.github.io/iti_brello',
        img: {backgroundImage: `url(${todoImage})`}

    },
    {
        id: v1(),
        title: 'Counter',
        description: 'Counter with settings.',
        link: 'https://braivs.github.io/iti_counter',
        img: {backgroundImage: `url(${counterImage})`}
    }
]

const projectsClassic = [
    {
        id: v1(),
        title: 'Namazon Club',
        description: 'Club of female wrestling. With video shop.',
        link: 'http://www.namazonclub.ru/',
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
                                <Tab>SPA React</Tab>
                                <Tab>HTML, CSS, JS</Tab>
                            </TabList>
                            <div className={s.tabsContent}>
                                <TabPanel className={s.tabElement}>
                                    {projectsSPA.map(el => <Project key={el.id} style={el.img} title={el.title}
                                                                    description={el.description} link={el.link}/>)}
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

// todo: fix open project link
