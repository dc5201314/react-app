/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-04-21 13:44:26
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-04-21 15:02:56
 * @FilePath: \4.22\react-app\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import PersonalCard from "./PersonalCard";

function App() {
  return (
    <div className="app">
      <PersonalCard />
    </div>
  );
}

export default App;
