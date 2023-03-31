import Container from "@/components/atoms/Container";
import { Suspense } from "react";
import BList from "@/components/organisms/BList";
function Home() {
  console.log("hi");
  return (
    <>
      <Container maxWidth="1200px" margin="auto">
        <Suspense fallback={<h1>Cargando</h1>}>
          <BList />
        </Suspense>
      </Container>
    </>
  );
}
export default Home;
