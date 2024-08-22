import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
 const resposta= await fetch ("https://tkb6nl2m-8082.brs.devtunnels.ms")
 const json= await resposta.json()
 function qualquerCoisa(item){
  return <div>{item.name}</div>
 }
 const lista= ["coisa1","coisa2"]
 console.log(lista[1])
 const primeiroItem=lista[0]
console.log(primeiroItem)
 
 const setinha= ()=>{}
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {json.clients.map(qualquerCoisa)}
        {json.clients.map((item)=>{return <div>{item.city}</div>})}
        {json.clients.map((item)=>{return <div>{item.email}</div>})}
        {json.products.map((item)=>{return <div>{item.name}</div>})}
        {json.products.map((item)=>{return <div>{item.price}</div>})}
        {json.products.map((item)=>{return <div>{item.size}</div>})}
        {json.products.map((item)=>{return <div>{item.category.name}</div>})}
        {json.products.map((item)=>{return <div>{item.description}</div>})}
      </div>

    </main>
  );
}
