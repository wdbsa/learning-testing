import React from 'react';
import './App.css';
import Application from './application/application';
import Skills from './skills/skills';
import { SkillProps } from './skills/skills.types';

function App() {
  const strArr: SkillProps = {
    skills: ["HTML", "CSS", "JAVASCRIPT"]
  }


  return (
    <div className="App">
      {/* <Application /> */}

      <Skills skills={strArr.skills}/>
    </div>
  );
}

export default App;
