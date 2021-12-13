import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Head>
        <title>Text & Speech App</title>
        <script src="./speechRecognition.js"></script>
      </Head>
      <h1>React Text To Speech & Speech to Text App</h1>
      <ul>
        <li>
          <Link href="/text-to-speech">Text To Speech</Link>
        </li>
        <li>
          <Link href="/speech-to-text">Speech To Text</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
