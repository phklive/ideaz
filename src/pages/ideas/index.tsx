import React from "react";
import IdeaCard from "../../components/IdeaCard";
import IdeaHeader from "../../components/IdeaHeader";
import { ideaz } from "../../utils/ideaz";

const Ideas = () => {
  return (
    <>
      <IdeaHeader />
      <div className="grid grid-cols-3 justify-center gap-8">
        {ideaz.map((idea) => (
          <IdeaCard
            category={idea.category}
            desc={idea.desc}
            image={idea.image}
            raised={idea.raised}
            title={idea.title}
            key={idea.title}
          />
        ))}
      </div>
    </>
  );
};

export default Ideas;
