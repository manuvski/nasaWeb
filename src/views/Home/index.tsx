import { FC, useCallback, useEffect, useState } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { getMars, Mars } from "../../services/api/mars"
import { App, Container } from "./styles";

const Home: FC = () => {
  const [marsList, setMarsList] = useState<Mars[]>([]);

  const getMarsList = useCallback(async () => {
    const mars = await getMars();
    setMarsList(mars);
  }, [])

  useEffect(() => {
    console.log('eentramos')
    getMarsList();
  }, [getMarsList]);

  return (
    <App>
      <Navbar
      />
      <Container>
      {marsList.map((mars, index) => (
        <Card
          key={index}
          nasaId={mars.nasaId} 
          sol={mars.sol}
          image={mars.image}
        />
      ))}
      </Container>
    </App>
  );
};

export default Home;
