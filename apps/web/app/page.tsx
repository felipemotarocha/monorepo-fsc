import { Button } from "@repo/ui";
import { userSchema } from "@repo/schemas";

const Home = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Button appName="web">Click me</Button>
    </div>
  );
};

export default Home;
