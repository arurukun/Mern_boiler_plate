import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState("ff")

  useEffect(()=>{
    const func = async() => {
      const res = await axios.get("http://127.0.0.1:5000/api/getreq")
      setData(res.data)
    }
    func()
  },[data])

  return (
    <>
    <div className="bg-primary"><Link to="/pages">This is home.</Link></div>
    <div className="bg-primary"><Link to="/pages">{data}</Link></div>
    </>
  )
}


