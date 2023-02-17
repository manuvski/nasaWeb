import { FC, useCallback, useEffect, useState } from "react";
import { getMars, Mars } from "../../services/api";

const Home: FC = () => {
  const [marsList, setMarsList] = useState<Mars[]>([]);

  const getMarsList = async () => {
    const mars = await getMars();
    setMarsList(mars);
  };

  useEffect(() => {
    getMarsList();
  }, [getMarsList]);

  return (
    <div>
      {/* {marsList.map((marslist, index) => (
        <>
          key={index}
          id={marslist.id}
          nasaId={marslist.nasaId} 
          sol={marslist.sol}
          image={marslist}
        </>
      ))} */}
    </div>
  );
};

export default Home;
