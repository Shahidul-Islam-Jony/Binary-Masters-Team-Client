import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import image from '../../assets/binary.png'
import { useEffect, useState } from "react";

const TeamMembers = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    console.log(members)
    return (
        <div className="py-20">
            <h2 className="text-3xl md:text-5xl uppercase font-bold text-center pb-10">Meet our <span className="text-cyan-500">team members</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
                {
                    members.map((member, index) => (
                        <div key={index} className="card w-full bg-black text-white shadow-md shadow-cyan-600">
                            <figure className="h-[300px]"><img className="h-full w-full" src={image} alt="Shoes" /></figure>
                            <div className="card-body space-y-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col flex-1">
                                        <h2 className="text-2xl text-gray-300 font-medium">{member.name}</h2>
                                        <p className="text-sm">{member.position}</p>
                                    </div>
                                    <div className='flex text-2xl mt-5'>
                                        <Link to={member?.socialLinks?.linkedin} ><span className='text-blue-500'><FaLinkedin className=""></FaLinkedin></span></Link>
                                        <Link to={member?.socialLinks?.facebook}><FaFacebook className='text-blue-500 bg-white rounded-full ml-5'></FaFacebook></Link>
                                        <Link to={member?.socialLinks?.twitter}><FaTwitter className='text-blue-500 ml-5'></FaTwitter></Link>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <button className="btn ">Portfolio</button>
                                    <button className="btn">Github</button>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TeamMembers;