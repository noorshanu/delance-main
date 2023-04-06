import React from "react";
import styles from "CSS/SpecialPowerCard.module.css";

const BulletPoint = ({ point }) => {
  return (
    <div className={styles.bulletPoint}>
      <div className={styles.bullet}></div>
      <p className="text-white">{point}</p>
    </div>
  );
};

function SpecialPowerCard({ title, points, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={icon} className={styles.icon} alt="" />
      </div>

      <p className="text-center text-white mb-4 weight-800">{title}</p>

      <div>
        {points.map((point, i) => (
          <BulletPoint key={i} point={point} />
        ))}
      </div>
    </div>
  );
}

export default SpecialPowerCard;
