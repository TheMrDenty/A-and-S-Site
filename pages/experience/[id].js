import { useRouter } from "next/router"
import Head from "next/head";

function Experience({experience}) {

    const router = useRouter();
    const {id} = router.query

    
  return (
    <div>
        <Head>
            <title>{experience.id}</title>
        </Head>
        <h1>Experience {id}</h1>
        
        {
            experience.imgs.map((experience)=>{
                return <img src={experience} />
            })
        }
    </div>

  )
}

export default Experience

export async function getStaticProps({params}) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: {experience: data},
    }
}

export async function getStaticPaths() {
    const req = await fetch(`http://localhost:3000/experience.json`);
    const data = await req.json();

    const paths = data.map(experience => {
        return {params: {id: experience}}
    })

    return { 
        paths,
        fallback: false
    }
}