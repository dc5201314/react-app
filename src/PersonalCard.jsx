/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-04-21 15:01:48
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-04-21 15:01:51
 * @FilePath: \4.22\react-app\src\PersonalCard.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import "./PersonalCard.css";

export default function PersonalCard() {
  return (
    <div className="card">
      <div className="avatar-container">
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          className="avatar"
        />
      </div>
      <div className="info">
        <h1 className="name">你的名字</h1>
        <p className="title">职业/职位</p>
        <p className="bio">个人简介或座右铭</p>
        <div className="social-links">
          <a href="#" className="social-link">
            LinkedIn
          </a>
          <a href="#" className="social-link">
            GitHub
          </a>
          <a href="#" className="social-link">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
