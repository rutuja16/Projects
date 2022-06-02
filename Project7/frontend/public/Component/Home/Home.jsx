import React,{useState,useEffect} from 'react';
import { useNavigate ,useParams } from "react-router-dom";
import axios from 'axios';
import Intro from './Intro/Intro';
import Latest from './Latest/Latest';
import LatestArticles from './LatestArticles/LatestArticles'
import LatestStories from './LatestStories/LatestStories';

function Home() {
    const params = useParams();
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/blogs`).then((response) => {
            setState(response.data.blogs); 
            //console.log(response.data.blogs)
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);
    return (
        <div >
            <Intro  state={state}/>
            <Latest state={state}/>
            <LatestArticles state={state} />
            <LatestStories state={state}/>
        </div>
    );
}

export default Home;