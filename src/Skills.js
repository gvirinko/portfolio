import React from 'react';
import {SkillsList, skillSet} from './SkillsList';
import ProgressBar from './ProgressBar';

class Skills extends React.Component {
    state = {
      skills: skillSet,
      showSkills: false,
    };

    toggleSkills = () => {
      this.setState(state => ({ showSkills: !state.showSkills }));
    };

    render() {
      return (
        <div className="skills">
            <h3 className="skills__title"
                style={{
                color: this.state.showSkills ? "#2F4858" : "#005B95",
                cursor: "pointer"
                }}
                onClick={this.toggleSkills}>
            {this.state.showSkills ? "My skills progress:": "Click to see my skills progress"}
            </h3>
            <div className="skills__wrapper">
                {this.state.showSkills && (
                    <SkillsList>
                        {this.state.skills.map(item => (
                        <div className="skill" key={item.label}>
                            <div key={item.label} className="skill__label">{item.label}</div>
                            <ProgressBar level={item.level}/>
                        </div>
                        ))}
                    </SkillsList>
                )}
            </div>


        </div>
      );
    }
  }

  export default Skills;
