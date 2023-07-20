import React, { useState } from "react";
import Link from "next/link";

const Start = () => {
  const [size, setSize] = useState<number>(950);

  return (
    <section className="hero-section">
      <div className="card-grid">
        <Link href={"thousand"} className="card">
          <div className="card__background"></div>
          <div className="card__content">
            <div className="card__category">미니게임</div>
            <div className="card__heading">Thousand Click</div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Start;
