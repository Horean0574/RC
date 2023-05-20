import React from "react";
import Layout from "../components/Layout";
import "../styles/About.css";

function About() {
    return (
        <Layout headline={"关于RC社"}>
            <h1 className={"subtitle"}>介绍</h1>
            <h4>
                RC是Radio Control的缩写，字面意思就是远程控制或者无线电控制。<br/>
                RC涵盖范围很广，像遥控车模、航模、船模，甚至军事上用到的无人机、战斗机器人，都属于RC范畴。<br/>
                这里需要强调的是儿童类遥控玩具并不属于RC。<br/>
                rc遥控车与普通遥控车都有哪些不一样<br/>
            </h4>
            <h1 className={"subtitle"}>更专业</h1>
            <h4 className={"content"}>
                遥控模型车和普通遥控车不一样，它其实是"真正汽车的缩小版本"，它有着和汽车相同的动力系统（发动机、排挡），还有悬挂系统；有高性能的轮胎，可以承受跟F1相当的4个G的离心力，更拥有着真车当中那些超级跑车的操控感觉，还有令超级跑车都自叹不如的惊人速度。
            </h4>
            <h1 className={"subtitle"}>对操作要求更高</h1>
            <h4 className={"content"}>
                和普通遥控车不同，由于整车性能很高，因此不论是竞速还是越野，RC遥控车都间接要求玩家拥有灵活的思维和敏捷的操控能力，而且由于RC遥控车的零部件时常需要更换，因此其也要求玩家拥有最基本的维修技巧，要知道这种小巧的车身修起来也是十分麻烦的。
            </h4>
            <h1 className={"subtitle"}>价格更高</h1>
            <h4 className={"content"}>比起普通遥控车，RC遥控车的价格是很高的，如此高的价格是因为RC遥控车内置电子芯片，有些高级的车型为了追求轻量化还加入了一些航空材料，因此想要成为RC遥控界的老玩家不只要有头脑，还要有钱。
                （不过学校会提供<b>（借）</b>车给我们就是了）
            </h4>
        </Layout>
    );
}

export default About;
