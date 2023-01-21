import Card from './Card.jsx';

import styles from './CardSection.module.css';

import calculator from '/src/assets/icon-calculator.svg';
import karma from '/src/assets/icon-karma.svg';
import supervisor from '/src/assets/icon-supervisor.svg';
import teamBuilder from '/src/assets/icon-team-builder.svg';

export default function CardSection() {
    return (
      <div className={styles.container}>
        <Card
          title="Supervisor"
          text="Monitors activity to identify project roadblocks"
          image={supervisor}
          color={'#44D3D2'}
        />
        <div className={styles.inner}>
          <Card 
            title="Team Builder"
            text="Scans our talent network to create the optimal team for your project"
            image={teamBuilder}
            color={'#EA5454'}
          />
          <Card 
            title="Karma"
            text="Regularly evaluates our talent to ensure quality"
            image={karma}
            color={'#FCAE4A'}
          />
        </div>
        <Card 
          title="Calculator"
          text="Uses data from past projects to provide better delivery estimates"
          image={calculator}
          color={'#549EF2'}
        />
      </div>
    );
  }