import React from 'react';
import {SkillsList, skillSet} from './SkillsList';

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
                onClick={this.toggleSkills}
            >
            My skills
            </h3>
            <h3 className="skills__title" onClick={this.toggleSkills}>⇟</h3>

            {this.state.showSkills && (
                <SkillsList>
                    {this.state.skills.map(item => (
                    <div className="skills__item">
                        <div key={item.label} className="skill__name">{item.label}</div>
                        <div className="skill__level">{item.level}</div>
                    </div>
                    ))}
                </SkillsList>
          )}
        </div>
      );
    }
  }

  export default Skills;
