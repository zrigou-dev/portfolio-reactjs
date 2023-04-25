import {React , useEffect} from 'react'
import './About.css'
import about from '../../assets/about.png'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'


const About = () => {
    const {ref , inView}= useInView({
        threshold:0.2
    });
    const animation = useAnimation()
    useEffect(()=>{
    if(inView){
        animation.start({
            x:0 ,
            opacity:1,
            transition:{
                type: 'spring' , duration:2 , bounce:0.1
            }
        })
    }
    if(!inView){
        animation.start({
            x:'-100vw',
            opacity:0 ,
        })
    }
    },[inView])
  return (
    <div className='About' ref={ref} id='about'>
        <div className="container">
        <motion.h3
        animate={animation}
        >About us</motion.h3>
            <div className="row">
                <motion.div className="col-md-6"
                animate={animation}
                >
                    <img src={about} alt="about"/>
                </motion.div>
                <motion.div className="col-md-6" 
                        animate={animation}
                >
                    <p className='p-about'>Je suis Mohamed Zrigou, un développeur d'interface utilisateur expérimenté avec des compétences en HTML, CSS, JavaScript, React JS et Bootstrap. J'ai travaillé comme freelance pendant un an et j'ai réalisé une variété de projets, allant de la conception de sites Web simples à des applications Web dynamiques.

J'ai des compétences solides en conception et en implémentation d'interfaces utilisateur modernes, attrayantes et conviviales pour les sites Web. Je suis également au courant des dernières technologies et outils utilisés dans le développement d'interfaces utilisateur, ce qui me permet de créer une expérience utilisateur distinctive et attrayante.

Je suis enthousiaste à l'idée de travailler avec une équipe professionnelle au sein de votre entreprise et de mettre mes compétences et mon expérience en développement d'interfaces utilisateur au service de vos objectifs et de vos produits. Je suis une personne travaillant dur avec un esprit d'équipe et je peux travailler de manière autonome ou en tant que membre d'une équipe.

Je suis impatient de discuter avec vous pour voir comment je peux contribuer au succès de votre entreprise, Mohamed Zrigou. Merci pour l'opportunité.</p>
                </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default About
