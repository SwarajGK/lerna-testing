// import { Button } from '@swaraj/component-lib';
import { cloneDeepFromLodash } from "@swaraj/common";

function LandingPage() {
  const onClick = () => {
    const testObject = { a: "a" };
    console.log("Clicked me", cloneDeepFromLodash(testObject));
  };
  // return <Button onClick={onClick}>Click me</Button>;
  return <button onClick={onClick}>This is testing</button>;
}

export default LandingPage;
