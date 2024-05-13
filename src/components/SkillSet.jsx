import SkillCard from './cards/skillcard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AWS from '../pics/AWS.png';
import Bootstrap from '../pics/Bootstrap.png';
import Express from '../pics/Express.png';
import Graphql from '../pics/Graphql.png';
import MongoDB from '../pics/MongoDB.svg';
import Nextjs from '../pics/Nextjs.svg';
import Node from '../pics/Node.png';
import Python from '../pics/Python.png';
import Reactjs from '../pics/Reactjs.png';
import SpringBoot from '../pics/Springboot.png';
import SQL from '../pics/SQL.png';
import Tailwind from '../pics/Tailwind.png';
import Postgresql from '../pics/Postgresql.png';
import Azure from '../pics/Azure.png';
import Ruby from '../pics/Ruby.png';
import Oracle from '../pics/Oracle.jpg';
import Git from '../pics/Git.png';
import Hadoop from '../pics/Hadoop.jpg';

const SkillSet = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div id="skillset" class="m-10 md:m-16 lg:m-20">
            <div class="group transition-all duration-300 ease-in-out">
                <h4 class="text-3xl pb-2 uppercase font-medium text-center bg-left-bottom bg-gradient-to-r hover:text-blue-800 from-blue-800 via-blue-400 to-blue-800 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                    Skill Set
                </h4>
            </div>

            <div class="justify-center">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true} >
                    <SkillCard
                        image={<img src={Reactjs} class="m-auto" alt="React.js" />}
                        skill="React.js" />

                    <SkillCard
                        image={<img src={Node} class="m-auto" alt="Node.js" />}
                        skill="Node.js" />

                    <SkillCard
                        image={<img src={Express} class="m-auto" alt="Express.js" />}
                        skill="Express.js" />

                    <SkillCard
                        image={<img src={MongoDB} class="m-auto" alt="MongoDB" />}
                        skill="MongoDB" />

                    <SkillCard
                        image={<img src={AWS} class="m-auto" alt="AWS" />}
                        skill="AWS" />

                    <SkillCard
                        image={<img src={Python} class="m-auto" alt="Python" />}
                        skill="Python" />

                    <SkillCard
                        image={<img src={Nextjs} class="m-auto" alt="Next.js" />}
                        skill="Next.js" />

                    <SkillCard
                        image={<img src={SQL} class="m-auto" alt="MySQL" />}
                        skill="MySQL" />

                    <SkillCard
                        image={<img src={Tailwind} class="m-auto" alt="Tailwind CSS" />}
                        skill="Tailwind CSS" />

                    <SkillCard
                        image={<img src={SpringBoot} class="m-auto" alt="Spring Boot" />}
                        skill="Spring Boot" />

                    <SkillCard
                        image={<img src={Graphql} class="m-auto" alt="GraphQL" />}
                        skill="GraphQL" />

                    <SkillCard
                        image={<img src={Bootstrap} class="m-auto" alt="Bootstrap" />}
                        skill="BootStrap" />

                    <SkillCard
                        image={<img src={Postgresql} class="m-auto" alt="PostgreSQL" />}
                        skill="PostgreSQL" />

                    <SkillCard
                        image={<img src={Azure} class="m-auto" alt="Microsoft Azure" />}
                        skill="Microsoft Azure" />

                    <SkillCard
                        image={<img src={Ruby} class="m-auto" alt="Ruby" />}
                        skill="Ruby" />

                    <SkillCard
                        image={<img src={Git} class="m-auto" alt="GIT" />}
                        skill="GIT" />

                    <SkillCard
                        image={<img src={Oracle} class="m-auto" alt="Oracle DB" />}
                        skill="Oracle DB" />

                    <SkillCard
                        image={<img src={Hadoop} class="m-auto" alt="Hadoop" />}
                        skill="Hadoop" />
                </Carousel></div>
        </div>
    )
};

export default SkillSet;