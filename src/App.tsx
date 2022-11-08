import React from 'react';
import './App.css';
import Application from './application/application';
import Counter from './counter/counter';
import Skills from './skills/skills';
import { SkillProps } from './skills/skills.types';
import Providers from './providers/providers';
import   MuiMode  from './components/mui/mui-mode';

function App() {
  const strArr: SkillProps = {
    skills: ["HTML", "CSS", "JAVASCRIPT"]
  }


  return (
    <Providers>
      <div className="App"> 
        <MuiMode />
      </div>
    </Providers>
  )


}

export default App;
