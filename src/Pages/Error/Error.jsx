import Lottie from "lottie-react";
import animations from '/public/Animation - 1705064527975.json'
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="max-w-full min-h-[800px]  ">
        {/* error page  */}
        <div className="my-20" ><h1 className="text-4xl text-center my-4 italic">Error Page Not Found</h1>
        {/* lottie file */}
      <Lottie  animationData={animations} className="h-[600px]"></Lottie>
      <Link to='/'><button className="flex mx-auto btn btn-outline btn-error  italic">Go Home</button></Link>
      </div>
      
      
    </div>
  )
}

export default Error
