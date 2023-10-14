import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { useEffect } from "react";
type Props = {
  me: string
}

export const getData = async () => {
  console.log("!");

  const promise = await (new Promise((resolve, rejects) => {
    setTimeout(() => {
      //setRender(true);
      resolve("");
    }, 7000);
  
  })
  .then(() => {
    return "welcome";
  }))

  //const data = await promise;
  console.log("!!")
  //console.log(me);

  return {me: promise}
}

const Page = async () => {
  const data = await getData();

  return (<div>Welcome again!</div>)
};

export default Page;