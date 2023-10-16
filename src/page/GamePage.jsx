import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

//https://static.vecteezy.com/system/resources/previews/010/975/655/original/red-cartoon-circle-button-png.png

const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;

const BIRD_WIDTH = 30;
const BIRD_HEIGHT = 28;

const OBSTACLE_WIDTH =52;
const OBSTACLE_GAP = 200;
const OBSTACLE_SPEED = 6;

const GRAVITY = 5;

const GamePage = ()=>{
    const [birdPos,setBirdPos] = useState(200);
    const [isStart,setIsStart] = useState(false);
    const [obstacleHight,setObstacleHight] = useState(200);
    const [obstaclePos,setObstaclePos] = useState(WALL_WIDTH);
    const bottomObstacle = (WALL_HEIGHT-OBSTACLE_GAP-obstacleHight);

    const [score,setScore] = useState(0);

    useEffect(()=>{
        let birdInterval;
        if(isStart&&birdPos<WALL_HEIGHT -BIRD_HEIGHT){
            birdInterval = setInterval(()=>{
                setBirdPos((birdPos)=>birdPos+GRAVITY);
            },24);
        }
        return ()=>clearInterval(birdInterval);
    });

    useEffect(()=>{
        let objInterval;
        if(isStart&& obstaclePos>= -OBSTACLE_WIDTH){
            objInterval = setInterval(()=>{
                setObstaclePos((obsPos)=>obsPos - OBSTACLE_SPEED);
            },24);
        }
        else{
            setObstaclePos(WALL_WIDTH);
            setObstacleHight(Math.floor(Math.random()*(WALL_HEIGHT-OBSTACLE_GAP)));
            
            if(isStart)setScore(score=>score+1);
        }
        return ()=>clearInterval(objInterval);
    },[isStart,obstaclePos]);

    useEffect(()=>{
        let topOb = birdPos>= 0 && birdPos<obstacleHight;
        let bottomOb = birdPos <= WALL_HEIGHT && birdPos >= WALL_HEIGHT-bottomObstacle-BIRD_HEIGHT;
        if(obstaclePos>=OBSTACLE_WIDTH&& obstaclePos <= OBSTACLE_WIDTH+80 && (topOb||bottomOb)){
            setIsStart(false);
            setBirdPos(300);
            setScore(0);
        }
    },[birdPos,obstacleHight,bottomObstacle,obstaclePos]);

    const ClickHandler = ()=>{
        if(!isStart){
            setIsStart(true);
        }
        if(birdPos<BIRD_HEIGHT){
           return setBirdPos(0)
        }
        return setBirdPos((birdPos)=>birdPos-50)
    }
    return (
    <Home onClick={ClickHandler}>
        GAME
        <div>Score:{score}</div>
        <Background heigth={WALL_HEIGHT} width={WALL_WIDTH}>
            {!isStart&&(<StartGame>
                Click to start
            </StartGame>)}
            <Obstacle deg={180} heigth={obstacleHight} left={obstaclePos} width ={OBSTACLE_WIDTH} top={0}/>
             
            <Bird heigth={BIRD_HEIGHT} width={BIRD_WIDTH} top={birdPos} left={100}/>
            <Obstacle deg={180} heigth={bottomObstacle} left={obstaclePos} width ={OBSTACLE_WIDTH} top={WALL_HEIGHT-(obstacleHight+bottomObstacle)}/>
        </Background>
    </Home>
    )
}

export default GamePage;

const Obstacle  = styled.div`
    position: relative;
    /* background-image: url("https://toppng.com/uploads/preview/flappy-bird-pipe-transparent-11549930651hqzkrjyfcl.png"); */
    background-color: green;
    width: ${props=>props.width}px;
    height: ${props=>props.heigth}px;
    left: ${props=>props.left}px;
    top: ${props=>props.top}px;
    
`

const StartGame =styled.div`
    text-align: center;
    position: relative;
    top: 49%;
    background-color: black;
    padding: 10px;
    width: 100px;
    left: 50%;
    margin-left: -55px;
    color: saddlebrown;
    border-radius: 8px;
    font-size: 20px;
`
const Home = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Background = styled.div`
    background-color: #00e1ff;
    background-repeat: no-repeat;
    background-size: ${props=>props.width}px ${(props)=>props.heigth}px;
    width: ${props=>props.width}px;
    height: ${props=>props.heigth}px;
    border: 2px solid;
    position: relative;
    overflow: hidden;
`;
const Bird = styled.div`
    position: absolute;
    background-image: url(https://static.vecteezy.com/system/resources/previews/010/975/655/original/red-cartoon-circle-button-png.png);
    background-repeat: no-repeat;
    background-size: ${props=>props.width}px ${(props)=>props.heigth}px;
    width: ${props=>props.width}px;
    height: ${props=>props.heigth}px;
    top: ${props =>props.top}px;
    left: ${props=>props.left}px;
    transform: rotate(${props=>props.deg}deg);
`;
