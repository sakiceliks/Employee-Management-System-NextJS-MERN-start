import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/table'
import {BiUserPlus} from 'react-icons/bi'
import Form from '../components/form'
import {useState} from 'react'
export default function Addcalisanlistesi() {
  const [visible,setVisible] = useState(false);

  const handler = () =>{
    setVisible(!visible)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>calisanlistesi  | by Saki Celik</title>
        <meta name="description" content="Generated by sakiceliks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-10">
      <h1 className='text-xl text-gray-200 md:text-4xl text-center font-bold py-10'>calisanlistesi </h1>

<div className='container mx-auto flex justify-between py-5 border-b'>
<div className='left flex gap-3'>
<button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md'>Çalışan Ekle
<span className='px-1'><BiUserPlus size={23}/>   
</span>
</button>

</div>
</div>
{visible? <Form></Form>:<></>}
<div className='container mx-auto'>
<Table></Table>
</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}