import Head from "next/head";
import { useSelector } from "react-redux";
import { selectCart } from "../slices/cartSlice";

export default function Home() {
  const data = useSelector(selectCart);
  console.log(data);
  return (
    <div className=" text-center">
      <Head>
        <title>Home page</title>
      </Head>

      <p>Next-js / Redux Toolkit / Tailwind Combo BoilerPlate </p>
    </div>
  );
}
