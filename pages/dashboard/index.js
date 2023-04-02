import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import prisma from "../../prisma/client"
import { authOptions } from "../api/auth/[...nextauth]"

const App = dynamic(() => import("../../admin/App"), { ssr: false });

const Dashboard = () => {
  return (

      <App />

  );
};

export default Dashboard;


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req,ctx.res,authOptions) 
  console.log(session)
  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }
  const data = await prisma.admin.findUnique({
    where: {
      userId: session.user.id
    }
  })
  return {
    props: {
      authenticated: true,
    }
  }
}